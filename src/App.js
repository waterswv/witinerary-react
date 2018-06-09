import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import MapForm from './MapForm';


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
    let style = {float: 'right'};
    let mainStyle = {height: '100vh'}

    return (
      <div>
      <div className="navbar">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/' className='logo'><i className="fas fa-wine-glass fa-lg"></i> Wine Tripping</Link></li>
          { !this.state.isLoggedIn ? <li style={style}><Link to="/signup">Sign Up</Link></li> : null}
          { this.state.isLoggedIn ? (<li style={style}><a onClick={this.handleClick}>Logout</a></li>) : (<li style={style}><Link to="/login">Login</Link></li>)}
          <li style={style}><Link to="/map">Current Map</Link></li>
          <li style={style}><Link to="/search">Search Wineries</Link></li>
      </ul>
    </div>
      <div className="hero-image home-hero" style={mainStyle}>
      <br></br>
        <p>Get lost amongst the Vines. <br></br> Wine country on your schedule</p>
        <MapForm />
      </div>
      </div>


  );
  }
}

const ComingSoon = () => {return <h1>Coming Soon!</h1>};

export default App;
