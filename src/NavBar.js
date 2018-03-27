import React, {Component} from 'react';
import './NavBar.css';
import Map from './Map';
import App from './App';
import Login from './Login';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';


class NavBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render() {
    let style = {float: 'right'};


    return (
    <Router>
      <div className="navbar">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/' className='logo'><i className="small material-icons">whatshot</i> Wine Tripping</Link></li>
          { !this.state.isLoggedIn ? <li style={style}><Link to="/signup">Sign Up</Link></li> : null}
          { this.state.isLoggedIn ? (<li style={style}><a onClick={this.handleClick}>Logout</a></li>) : (<li style={style}><Link to="/login">Login</Link></li>)}
          <li style={style}><Link to="/map">Current Map</Link></li>
          <li style={style}><Link to="/wineries">Wineries</Link></li>
      </ul>

        <Route exact path="/" component={App} />
        <Route path="/signup" component={ComingSoon} />
        <Route exact path="/login" render={(props) => <Login onLogInClick={this.handleClick} {...props}/>} />
        <Route exact path="/wineries" render={(props) => <Map mapID={'5a888fbb3dec7f7002c9a4aa'} {...props}/>} />
        <Route path="/map" component={Map} />
      </div>

  </Router>

  );
  }
}
const ComingSoon = () => {return <h1>Coming Soon!</h1>};




export default NavBar;
