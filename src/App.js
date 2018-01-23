import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import Panel from './Panel';

class App extends Component {
  render() {
    return (

      <div className="wrapper">
          <NavBar />
          <Panel />
      </div>

  );
  }
}

export default App;
