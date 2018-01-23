import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import Panel from './Panel';
import Map from './Map';


class App extends Component {
  render() {
    return (

      <div className="wrapper">
          <NavBar />
          <Panel />
          <Map />

      </div>

  );
  }
}

export default App;
