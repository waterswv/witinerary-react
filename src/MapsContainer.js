import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapGoogle from './MapGoogle';

const mykey = 'AIzaSyDV5HMbW_2loRPhf5xa0IzXP5SfOP1TF-Q';
export class MapsContainer extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <MapGoogle google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: mykey
})(MapsContainer);
