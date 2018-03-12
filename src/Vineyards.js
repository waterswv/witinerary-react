import React, {Component} from 'react';
import './Vineyards.css';

class Vineyards extends Component {

  render() {
    return (

      <div className='vineyards'>
        <p className='vineyard-title'>{this.props.name}</p>
        <p className='tasting-room'>{this.props.description}</p>
        <p className='hours-ops'>{this.props.hours}</p>
      </div>
    );
  }
}

export default Vineyards;
