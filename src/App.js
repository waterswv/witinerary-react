import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Vineyards from './Vineyards';


class App extends Component {
  render() {
    let style = {height: '100vh'}
    return (

      <div>
        <NavBar />
        <div className="hero-image home-hero" style={style}>
          Get lost amongst the Vines. <br></br> Wine country on your schedule 
        </div>
        <Footer />
      </div>

  );
  }
}

export default App;
