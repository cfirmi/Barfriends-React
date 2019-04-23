import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MapContainerBox = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  top: -130px;
  height: 120vh;
  min-height: 800px; width: 100vw;
  @media (max-width: 600px) {
    display: none;
  };
`;
const MapStyle = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  text-align: center;
  z-index: 1;
`;
const HideDiv = styled.div`
  grid-column: 1 / -1;
  /* grid-row: -1; */
  margin-top: -50px;
  height: 50px;
  background: black;
  z-index: 2;
  content: '';
  @media (max-width: ${props => props.theme.mobileWidth}) {
  /* background: red; */
};
`;

export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const Styles = require('./style.json');
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom,
          styles: Styles,
          zoomControl: false,
          disableDefaultUI: true,
          draggable: false,
        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    // const style = Object.assign({}, mapStyles.map);

    return (
      <MapContainerBox>
        <HideDiv></HideDiv>
        <MapStyle ref="map"> </MapStyle>
        {this.renderChildren()}
      </MapContainerBox>
    );
  }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 15,
  initialCenter: {
    lat: -80.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};