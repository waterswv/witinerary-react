import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    let style = {float: 'right'};
    let logo = {color: 'white',
                textAlign: 'center',
                padding: '14px 16px',
                fontSize: '20px'}
    return (

      <nav className="navbar">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <span style={logo}>Wine Tripping</span>
          <li style={style}><a href="#">Sign Up</a></li>
          <li style={style}><a href="#">Login</a></li>
          <li style={style}><a href="/new-map/59c15c15d0e8ec15c0eea22e">My Wine Map</a></li>
          <li style={style}><a href="#">Wineries</a></li>
      </ul>
    </nav>

  );
  }
}

export default NavBar;
