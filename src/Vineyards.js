import React, {Component} from 'react';
import './Vineyards.css';

class Vineyards extends Component {

  render() {
    return (

      <div className='vineyards'>
        <div className='heading'>
          <p className='vineyard-title'>{this.props.name}</p>
          <p className='tasting-room'><a href='#'> {'More Info'}</a></p>
          <p className='add-winery'><a href='#'>{'Click Here to Add Me'}</a></p>
        </div>
        <div className='heading'>
          <p className='vineyard-address'>{'123 Main St. Healdsburg, CA'}</p>
          <p className='more-info'></p>
          <p className='hours-ops'>{this.props.hours}</p>
        </div>
      </div>
    );
  }
}

export default Vineyards;
