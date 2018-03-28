import React, { Component } from 'react';
import './VineyardModal.css';

class VineyardModal extends Component {


  render(){

    return (

      <div className='vineyard-modal'>
        <div className='row'>
          <div className='col-8'>
            <div>{this.props.name}</div>
            <div> <span className='address'><b>Address:</b></span>{this.props.fullAddress}</div>
            <div> <span className='phone'><b>Phone:</b></span>{this.props.contactPhone}</div>
            <div> <span className='email'><b>Email:</b></span>{this.props.contactEmail}</div>
          </div>
          <div className='col-4'> <img src='./images/sonoma-map.png'/>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='description'><span className='title-text'><b>Our Winery: </b></span>{this.props.description}</div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='varietals'><span className='title-text'><b>Varietals:</b></span> [Pinot Noir, Chardonnay, Pinot Gris, Grenache] </div>
            <div className='spacer'></div>
            <div className='social-networks'><span className='title-text'><b>Share:</b></span> <span><i className="fas fa-envelope fa-lg"></i></span> <span><i className="fab fa-snapchat-ghost fa-lg"></i></span> <span><i className="fab fa-instagram fa-lg"></i></span> <span><i className="fab fa-twitter fa-lg"></i></span> </div>
          </div>
        </div>
      </div>

    )
  }
}

export default VineyardModal;
