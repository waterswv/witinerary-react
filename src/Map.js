import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import NavBar from './NavBar';
import Vineyards from './Vineyards';


class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      maps: [{}],
      theWineries: [],
      theMap: '',
      selectedWineries: [],
      style: {
        one: {display: 'block'},
        two: {display: 'block'},
        three: {display: 'block'}
      },
      tabs: {
        one: {backgroundColor: 'white'},
        two: {backgroundColor: 'white'},
        three: {backgroundColor: 'white'}
        }

      }
      this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    center: {lat: 38.5706633, lng: -122.7795547},
    zoom: 11
  };
  handleClick(id){
    this.setState({style: this.state.style.display === 'block' ? {display: 'none'} : {display: 'block'}})

    console.log(id);
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
            <div className='map-tabs'>
              <div className='tabs' style={this.state.tabs.one}><span className='tabs-span' data-id='one' onClick={('one') => this.handleClick}>Trip Wineries</span></div>
              <div className='tabs' style={this.state.tabs.two}><span className='tabs-span' data-id='two' onClick={('two') => this.handleClick}>Recommendations</span></div>
              <div className='tabs' style={this.state.tabs.three}><span className='tabs-span' data-id='two' onClick={('three') => this.handleClick}>Add-ons</span></div>
            </div>
            <span  className="hidden" style={this.state.style.one}>
              <h3>Selected Wineries</h3>
              {selectedVineyards}
            </span>
            <span className="active" style={this.state.style.two}>
              <h3>Available Wineries</h3>
              {vineyards}
            </span>
            <span className="active" style={this.state.style.three}>
              <h3>Available Add-ons</h3>
              Coming Soon
            </span>

          </div>


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
