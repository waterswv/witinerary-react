import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import NavBar from './NavBar'
import Vineyards from './Vineyards'

class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      maps: [{}],
      theWineries: [],
      theMap: '',
      selectedWineries: [],
      style: {display: 'block'}
    }
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    center: {lat: 38.5706633, lng: -122.7795547},
    zoom: 11
  };

  handleClick(event){
    let theDisplay = this.state.style.display === 'block' ? {display: 'none'} : {display: 'block'}
    this.setState({style: theDisplay})
  }

  componentDidMount(){

    fetch('http://localhost:8000/api/winery')
      .then((response) => response.json())
        .then((wineries) => this.setState({theWineries: wineries}))
    fetch('http://localhost:8000/api/map')
      .then((response) => response.json())
        .then((maps) => this.setState({maps: maps.data, selectedWineries: maps.data[0].wineries}))

  }
  render() {

      let vineyards = this.state.theWineries.map((winery, index) => {
        return (
          <Vineyards
            key={index}
            name={winery.name}
            description={winery.description}
            hours={winery.hours}
          />
        )
      });

      let selectedVineyards = this.state.selectedWineries.map((winery, index) => {
        return (
          <Vineyards
            key={index}
            name={winery.name}
            description={winery.description}
            hours={winery.hours}
          />
        )
      });


    return (

      <div>
        <NavBar />
        <div className='row'>
          <div className='col-5'>
            <div className='title'>{this.state.maps[0].title}</div>
            <div id='the-map'>
            <GoogleMapReact
              bootstrapURLKeys={{ key: ['AIzaSyDV5HMbW_2loRPhf5xa0IzXP5SfOP1TF-Q'] }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              >

              </GoogleMapReact>
            </div>
          </div>
          <div className='col-7'>
          <div className='map-card'>
            <span  style={this.state.style}>
              <h3>Selected Wineries</h3>
              {selectedVineyards}
            </span>
            <div className='map-tabs'>
              <div className='circles'onClick={this.handleClick}><i className="fa fa-circle-o"></i></div>
              <div className='circles'onClick={this.handleClick}><i className="fa fa-circle-o"></i></div>
              <div className='circles'onClick={this.handleClick}><i className="fa fa-circle"></i></div>
            </div>
          </div>

            <h3>Available Wineries</h3>
            {vineyards}
          </div>
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
