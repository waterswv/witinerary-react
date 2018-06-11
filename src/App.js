import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {HomepageLayout} from './Home';
import MapForm from './MapForm';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';


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
        <HomepageLayout />
      </div>


  );
  }
}


export default App;
