import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import NavBar from './NavBar';
import Vineyards from './Vineyards';
import {Tab} from './Tab'




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
        two: {display: 'none'},
        three: {display: 'none'}
      },
      tabs: {
        tabone: {backgroundColor: '#B88AAC'},
        tabtwo: {backgroundColor: 'white'},
        tabthree: {backgroundColor: 'white'}
      },
      mapstyle: {
        one: {display: 'block'},
        two: {display: 'none'},
        three: {display: 'none'}
      },
      maptabs: {
        tabone: {backgroundColor: '#B88AAC'},
        tabtwo: {backgroundColor: 'white'},
        tabthree: {backgroundColor: 'white'}
      },

      }
      this.handleClick = this.handleClick.bind(this);

  }
  static defaultProps = {
    center: {lat: 38.5706633, lng: -122.7795547},
    zoom: 11
  };
  handleClick(id){
    if(id === 1)
    {
      this.setState( (prevState) => {
        const newState = Object.assign({}, prevState);
        newState.style.one = {display: 'block'};
        newState.style.two = {display: 'none'};
        newState.style.three = {display: 'none'};
        newState.tabs.tabone = {backgroundColor: '#B88AAC'};
        newState.tabs.tabtwo = {backgroundColor: 'white'};
        newState.tabs.tabthree = {backgroundColor: 'white'};
        return newState;
      });
    }
    if(id === 2)
    {
      this.setState( (prevState) => {
        const newState = Object.assign({}, prevState);
        newState.style.one = {display: 'none'};
        newState.style.two = {display: 'block'};
        newState.style.three = {display: 'none'};
        newState.tabs.tabone = {backgroundColor: 'white'};
        newState.tabs.tabtwo = {backgroundColor: '#B88AAC'};
        newState.tabs.tabthree = {backgroundColor: 'white'};
        return newState;
      });
    }
    if(id === 3)
    {
      this.setState( (prevState) => {
        const newState = Object.assign({}, prevState);
        newState.style.one = {display: 'none'};
        newState.style.two = {display: 'none'};
        newState.style.three = {display: 'block'};
        newState.tabs.tabone = {backgroundColor: 'white'};
        newState.tabs.tabtwo = {backgroundColor: 'white'};
        newState.tabs.tabthree = {backgroundColor: '#B88AAC'};
        return newState;
      });
    }
    if(id === 4)
    {
      this.setState( (prevState) => {
        const newState = Object.assign({}, prevState);
        newState.mapstyle.one = {display: 'block'};
        newState.mapstyle.two = {display: 'none'};
        newState.mapstyle.three = {display: 'none'};
        newState.maptabs.tabone = {backgroundColor: '#B88AAC'};
        newState.maptabs.tabtwo = {backgroundColor: 'white'};
        newState.maptabs.tabthree = {backgroundColor: 'white'};
        return newState;
      });
    }
    if(id === 5)
    {
      this.setState( (prevState) => {
        const newState = Object.assign({}, prevState);
        newState.mapstyle.one = {display: 'none'};
        newState.mapstyle.two = {display: 'block'};
        newState.mapstyle.three = {display: 'none'};
        newState.maptabs.tabone = {backgroundColor: 'white'};
        newState.maptabs.tabtwo = {backgroundColor: '#B88AAC'};
        newState.maptabs.tabthree = {backgroundColor: 'white'};
        return newState;
      });
    }
    if(id === 6)
    {
      this.setState( (prevState) => {
        const newState = Object.assign({}, prevState);
        newState.mapstyle.one = {display: 'none'};
        newState.mapstyle.two = {display: 'none'};
        newState.mapstyle.three = {display: 'block'};
        newState.maptabs.tabone = {backgroundColor: 'white'};
        newState.maptabs.tabtwo = {backgroundColor: 'white'};
        newState.maptabs.tabthree = {backgroundColor: '#B88AAC'};
        return newState;
      });
    }

    console.log('This is the id passed down ', id);

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
          <div className='map-card'>
            <div className='map-tabs'>
              <Tab
                value={4}
                onTabClick={this.handleClick}
                name={'Map'}
                tabs={this.state.maptabs.tabone}
                />
              <span className='the-span'><Tab
                value={5}
                onTabClick={this.handleClick}
                name={'Directions'}
                tabs={this.state.maptabs.tabtwo}
              /></span>
              <Tab
                value={6}
                onTabClick={this.handleClick}
                name={'TBD View'}
                tabs={this.state.maptabs.tabthree}
              />
            </div>
            <div id='the-map' style={this.state.mapstyle.one}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: ['AIzaSyDV5HMbW_2loRPhf5xa0IzXP5SfOP1TF-Q'] }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
              </div>
              <span className="active" style={this.state.mapstyle.two}>
                <h3>Directions</h3>

              </span>
              <span className="active" style={this.state.mapstyle.three}>
                <h3>TBD</h3>
                Coming Soon
              </span>
          </div>
        </div>
          <div className='col-7'>
            <div className='title'>Some Title...</div>

          <div className='map-card'>
            <div className='map-tabs'>

              <Tab
                value={1}
                onTabClick={this.handleClick}
                name={'Trip Wineries'}
                tabs={this.state.tabs.tabone}
                />
              <span className='the-span'><Tab
                value={2}
                onTabClick={this.handleClick}
                name={'Recommendations'}
                tabs={this.state.tabs.tabtwo}
              /></span>
              <Tab
                value={3}
                onTabClick={this.handleClick}
                name={'Add-ons'}
                tabs={this.state.tabs.tabthree}
              />

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
