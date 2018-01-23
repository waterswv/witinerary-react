import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (

      <div className='navbar'>
        <ul>
          <li><a href="#">LOGO-TBD</a> </li>
          <li><a href="#">Vineyards</a></li>
          <li><a href="#">New Map</a></li>
        </ul>
      </div>

  );
  }
}

export default NavBar;
