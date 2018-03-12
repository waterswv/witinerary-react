import React, {Component} from 'react';
import './Map.css';
import NavBar from './NavBar'
import Vineyards from './Vineyards'

class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      wineries: [{name: 'Unti', description: 'DCR Vineyard', hours: '10AM-5PM'}, {name: 'Wilson', description: 'DCR Vineyard', hours: '10AM-5PM'}]
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/api/winery')
      .then((response) => response.json())
        .then((wineries) => this.setState({wineries: wineries}))
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

      <div className='wrapper'>
        <NavBar />
        {vineyards}
      </div>

  );
  }
}

export default Map;
// TODO:
// TODO: Add a map function component to place MAP on a spot on the page
// => Call data
// TODO: Add a new winery that can be added to the map => reRender page upon delivery
