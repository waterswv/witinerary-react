import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    let style = {backgroundColor: '#B88AAC'}
    return (
      <nav style={style}>
      <div class="nav-wrapper">
      <a href="/" class="brand-logo"><i class="large material-icons">whatshot</i>Wine-tripping</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="/new-map/59c15c15d0e8ec15c0eea22e">My Wine Map</a></li>
        <li><a href="#">Wineries</a></li>
    </ul>
  </div>
  </nav>

  );
  }
}

export default NavBar;
