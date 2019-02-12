import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';
import CurrentLocation from './Map';


const HideDiv = styled.div`
  position: absolute;
  margin-top: 90vh;
  height: 45px; width: 100vw;
  background: black;
  z-index: 2;
  content: '';
@media (max-width: 764px) {
    position: absolute;
    margin-top: -13vh;
};
`;

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
      <HideDiv></HideDiv>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVRnIHo7n3viznuKtk-G5_YpjQuAoHffU'
})(MapContainer);