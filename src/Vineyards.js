import React, {Component} from 'react';
import './Vineyards.css';
import Popup from 'reactjs-popup';
import Footer from './Footer';

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
          <p className='more-info'>
            <span>
              <Popup
                trigger={<span>More Info</span>}
                modal
                closeOnDocumentClick>
                <Footer />
              </Popup>
            </span>
          </p>
          <p className='add-winery'><span> Add Me </span></p>
        </div>
      </div>
    );
  }
}

export default Vineyards;
