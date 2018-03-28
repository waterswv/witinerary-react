import React, { Component } from 'react';
import './TripDetails.css';

class TripDetails extends Component {


  render(){

    return (

      <div className='trip-details'>
        <div className='row'>
          <div className='col-8'>
            <div> <span className='title-text'><b>Date:</b></span> {this.props.scheduleDate}</div>
            <div> <span className='title-text'><b>Time:</b></span> {this.props.startTime}</div>
            <div> <span className='title-text'><b>Start:</b></span> {'Unti Vineyard'}</div>
            <div> <span className='title-text'><b>End:</b> </span>{'Dukes on the Square'}</div>
            <div> <span className='title-text'><b>Region:</b></span> {this.props.wineRegion}</div>
          </div>
          <div className='col-4'> <img src='./images/sonoma-map.png'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='varietals'><span className='title-text'><b>Varietals:</b></span> [Pinot Noir, Chardonnay, Pinot Gris, Grenache] </div>
            <div className='spacer'></div>
            <div className='social-networks'><span className='title-text'><b>Share:</b></span> <span><i class="fas fa-envelope fa-lg"></i></span> <span><i class="fab fa-snapchat-ghost fa-lg"></i></span> <span><i class="fab fa-instagram fa-lg"></i></span> <span><i class="fab fa-twitter fa-lg"></i></span> </div>
          </div>
        </div>
      </div>

    )
  }
}

export default TripDetails;
