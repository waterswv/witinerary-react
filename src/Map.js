import React, {Component} from 'react';
import './Map.css';
import NavBar from './NavBar'
import Vineyards from './Vineyards'

class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      map: [{}],
      wineries: [],
      theMap: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/api/winery')
      .then((response) => response.json())
        .then((wineries) => this.setState({wineries: wineries}))
    fetch('http://localhost:8000/api/map')
      .then((response) => response.json())
        .then((maps) => this.setState({map: maps.data}))
    fetch('http://localhost:8000/api/map/google')
      .then((response) => response.json())
        .then((theMap) => this.setState({theMap: theMap}))
  }
  render() {

      let vineyards = this.state.wineries.map((winery, index) => {
        return (
          <Vineyards
            key={index}
            name={winery.name}
            description={winery.description}
            hours={winery.hours}
          />
        )
      })


    return (

      <div>
        <NavBar />
        <div className='row'>
          <div className='col-4'>
            <div className='title'>{this.state.map[0].title}</div>
            <div className='title'><img src={this.state.theMap} alt='staticmap'/></div>
          </div>
          <div className='col-8'>{vineyards}</div>
        </div>
      </div>

  );
  }
}

export default Map;
// TODO:
// TODO: Add a map function component to place MAP on a spot on the page
// => Call data
// TODO: Add a new winery that can be added to the map => reRender page upon delivery
