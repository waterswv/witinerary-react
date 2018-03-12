import React, {Component} from 'react';
import './Map.css';
import NavBar from './NavBar'

class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      wineries: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/api/winery')
      .then((response) => response.json())
        .then((wineries) => this.setState({wineries: wineries}))
  }
  render() {


    return (

      <div className='wrapper'>
        <NavBar />

      </div>

  );
  }
}

export default Map;
// TODO:
// TODO: Add a map function component to place MAP on a spot on the page
// => Call data
// TODO: Add a new winery that can be added to the map => reRender page upon delivery
