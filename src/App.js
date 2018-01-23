import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import Panel from './Panel';
import Map from './Map';
import Filters from './Filters';
import ThirdParty from './ThirdParty';


class App extends Component {
  render() {
    return (

      <div className="wrapper">
          <NavBar />
          <Panel />
          <Map />
          <Filters />
          <ThirdParty />

      </div>

  );
  }
}

export default App;
