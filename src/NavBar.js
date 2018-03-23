import React, {Component} from 'react';
import './NavBar.css';
import Map from './Map';
import App from './App';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class NavBar extends Component {
  render() {
    let style = {float: 'right'};

    return (
    <Router>
      <div className="navbar">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/' ClassName='logo'><i className="small material-icons">whatshot</i> Wine Tripping</Link></li>
          <li style={style}><Link to="/signup">Sign Up</Link></li>
          <li style={style}><Link to="/login">Login</Link></li>
          <li style={style}><Link to="/map">Current Map</Link></li>
          <li style={style}><Link to="/wineries">Wineries</Link></li>
      </ul>

        <Route exact path="/" component={App} />
        <Route path="/signup" component={ComingSoon} />
        <Route path="/login" component={ComingSoon} />
        <Route path="/map" component={Map} />
        <Route path="/wineries" component={ComingSoon} />
      </div>

  </Router>

  );
  }
}
const ComingSoon = () => {return <h1>Coming Soon!</h1>}

export default NavBar;
