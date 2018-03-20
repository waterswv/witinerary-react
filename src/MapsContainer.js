import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapGoogle from './MapGoogle';
import MapMarker from './MapMarker';

const mykey = 'AIzaSyDV5HMbW_2loRPhf5xa0IzXP5SfOP1TF-Q';
export class MapsContainer extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    let markers = this.props.vineyards.map((vineyard, index) => {
      let pos = {
        lat: vineyard.maps.lat,
        lng: vineyard.maps.long
      }
      return (<MapMarker key={index+1} position={pos} />);
    });
    return (
      <div>
        <MapGoogle
          displayMap={this.props.displayMap}
          displayDirections={this.props.displayDirections}
          google={this.props.google}>
          {markers}
        </MapGoogle>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: mykey
})(MapsContainer);
