import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MapForm from './MapForm';
import { Navbar, NavItem, Icon, } from 'react-materialize';


class App extends Component {
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
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  render() {

    return (
      <div>
        <Navbar className="purple darken-1" brand={<Link to='/' className='logo'><i style={{margin: "5px"}} className="fas fa-wine-glass fa-lg"></i> Wine Tripping</Link>} right>
          <li>{ !this.state.isLoggedIn ? <Link to="/signup">Sign Up</Link> : null}</li>
          <li><Link to="/search"><Icon>search</Icon></Link></li>
          <li>{ this.state.isLoggedIn ? (<a onClick={this.handleClick}>Logout</a>) : (<Link to="/login">Login</Link>)}</li>
          <li><Link to="/map">Current Map</Link></li>
        </Navbar>
      </div>


  );
  }
}


export default App;
