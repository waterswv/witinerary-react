import React, {Component} from 'react';
import './Vineyards.css';

class Vineyards extends Component {

  render() {
    return (

      <div className='vineyards'>
        <div className='heading'>
          <p className='vineyard-title'>{this.props.name}</p>
          <p className='vineyard-address'>{`123 Main St.`} <br></br> {`Healdsburg, CA`}</p>
          <p className='hours-ops'>{this.props.hours}</p>
        </div>
        <div className='heading'>
          <p className='more-info'>{'415-234-8976'}</p>
          <p className='more-info'><a href='#'> {'More Info'}</a></p>
          <p className='add-winery'><a href='#'>{'Add Me'}</a></p>
        </div>
      </div>
    );
  }
}

export default Vineyards;
