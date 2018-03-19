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
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div>
        <MapGoogle
          google={this.props.google}>
          <MapMarker position={pos} />
        </MapGoogle>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: mykey
})(MapsContainer);
