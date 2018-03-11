import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import MapForm from './MapForm';


class App extends Component {
  render() {
    let style = {height: '100vh'}
    return (

      <div>
        <NavBar />
        <div className="hero-image home-hero" style={style}>
        <br></br>
          <p>Get lost amongst the Vines. <br></br> Wine country on your schedule</p>
          <MapForm />
        </div>
        <Footer />
      </div>

  );
  }
}

export default App;
