import React, {Component} from 'react';
import './Vineyards.css';

class Vineyards extends Component {
  render() {
    return (

      <div className='vineyards'>
        <a><button className="w3-button w3-large w3-circle w3-red w3-card-4">+</button></a>
        <p className='vineyard-title'>Unti Wines</p>
        <p className='tasting-room'>Open: Wed - Sun 10AM - 5PM</p>
      </div>


  );
  }
}

export default Vineyards;
