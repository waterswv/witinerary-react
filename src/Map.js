import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
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
  static defaultProps = {
    center: {lat: 38.5706633, lng: -122.7795547},
    zoom: 11
  };

  componentDidMount(){

    fetch('http://localhost:8000/api/winery')
      .then((response) => response.json())
        .then((wineries) => this.setState({wineries: wineries}))
    fetch('http://localhost:8000/api/map')
      .then((response) => response.json())
        .then((maps) => this.setState({map: maps.data}))

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
            <div id='the-map'>
            <GoogleMapReact
              bootstrapURLKeys={{ key: ['AIzaSyDV5HMbW_2loRPhf5xa0IzXP5SfOP1TF-Q'] }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              >

              </GoogleMapReact>
            </div>
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
