import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapGoogle from './MapGoogle';
import MapMarker from './MapMarker';

const mykey = 'AIzaSyDV5HMbW_2loRPhf5xa0IzXP5SfOP1TF-Q';
export class MapsContainer extends Component {
  handleClick(){
    console.log("You Clicked the Marker")
  }
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    // setup Direction prop variables
    let originDir, destDir;
    let wayptDirections = [];

    let markers = this.props.vineyards.map((vineyard, index) => {
      let pos = {
        lat: vineyard.maps.lat,
        lng: vineyard.maps.long
      }
      // place lat lng data into direction prop variables
        if(index === 0)
        {
          originDir = pos;
        }else if (index === this.props.vineyards.length-1) {
          destDir = pos;
        }else{
          wayptDirections.push({location: pos});
        }
      return (<MapMarker onClick={this.handleClick} key={index+1} title={vineyard.name} position={pos} />);
    });

    return (
      <div>
        <MapGoogle
          originDir={originDir}
          destDir={destDir}
          wayptDirections={wayptDirections}
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
