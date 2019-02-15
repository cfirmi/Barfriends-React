import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';
import CurrentLocation from './Map';




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
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVRnIHo7n3viznuKtk-G5_YpjQuAoHffU'
})(MapContainer);