import React, {Component} from 'react';
import './Vineyards.css';
import Popup from 'reactjs-popup';
import VineyardModal from './VineyardModal';
import {CollectionItem, } from 'react-materialize';

class Vineyards extends Component {
  handleAddWinery = () => {
    this.props.onWineryClick(this.props.value)
  }
  handleDeleteWinery = () => {
    this.props.onDeleteWineryClick(this.props.value)
  }
  render() {
    return (

      <CollectionItem className="vineyards">
        <div className='heading'>
          <p className='vineyard-title'>{this.props.name}</p>
          <p className='vineyard-address'>{this.props.fullAddress}</p>
          <p className='hours-ops'>{this.props.hours}</p>
        </div>
        <div className='heading'>
          <p className='more-info'>{this.props.contactPhone}</p>
          <p className='more-info'>
            <span>
              <Popup
                trigger={<span>More Info</span>}
                modal
                closeOnDocumentClick>
                <VineyardModal
                  name={this.props.name}
                  fullAddress={this.props.fullAddress}
                  contactPhone={this.props.contactPhone}
                  contactEmail={this.props.contactEmail}
                  description={this.props.description}
                  />
              </Popup>
            </span>
          </p>
          {!this.props.onWinemap ? <p className='add-winery'><span onClick={this.handleAddWinery}>Add Me</span></p> : <p className='delete-winery'><span onClick={this.handleDeleteWinery}>Delete Me</span></p>}
        </div>
      </CollectionItem>
    );
  }
}

export default Vineyards;
