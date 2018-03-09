import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import Panel from './Panel';
import Map from './Map';
import Filters from './Filters';
import ThirdParty from './ThirdParty';
import Vineyards from './Vineyards';


class App extends Component {
  render() {
    let style = {height: '100vh'}
    return (
        <div className="hero-image">
          <p className="home-hero" style={style}>Get lost amongst the Vines. <br></br> Wine country on your schedule </p>
        </div>

  );
  }
}

export default App;
