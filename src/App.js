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
    return (

      <div className="wrapper">
          <NavBar />
          <Panel />
          <Map />
          <Filters />
          <ThirdParty />
          <Vineyards />
          

      </div>

  );
  }
}

export default App;
