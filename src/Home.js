import React, {Component} from 'react';
import MapForm from './MapForm';
import './App.css';

class Home extends Component {

render() {
  let mainStyle = {height: '100vh'}

  return (

    <div className="hero-image home-hero" style={mainStyle}>
    <br></br>
      <p>Get lost amongst the Vines. <br></br> Wine country on your schedule</p>
      <MapForm />
    </div>
    )

  }

}

export default Home;
