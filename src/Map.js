import React, {Component} from 'react';
import './Map.css';
import Directions from './Directions';

class Map extends Component {
  render() {
    return (

      <div className='map'>
        <div className='map-card'>
          <img src='images/sonoma-map.png' alt='Sonoma Map'></img>
          <div className='map-tabs'>
            <div className='circles'><i className="fa fa-circle-o"></i></div>
            <div className='circles filled'><i className="fa fa-circle"></i></div>
            <div className='circles'><i className="fa fa-circle-o"></i></div>
          </div>
        </div>
        <Directions />
      </div>

  );
  }
}

export default Map;
