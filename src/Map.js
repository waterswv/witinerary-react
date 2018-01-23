import React, {Component} from 'react';
import './Map.css';
import Directions from './Directions';

class Map extends Component {
  render() {
    return (

      <div className='map'>
        <img src='images/sonoma-map.png' alt='Sonoma Map'></img>
        <Directions />
      </div>

  );
  }
}

export default Map;
