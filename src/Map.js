import React, {Component} from 'react';
import './Map.css';
import Vineyards from './Vineyards';
import {Tab} from './Tab';
import TripDetails from './TripDetails';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import MapGoogle from './MapGoogle';
import MapMarker from './MapMarker';

const mykey = 'AIzaSyDV5HMbW_2loRPhf5xa0IzXP5SfOP1TF-Q';
const mapAPIs = {
  mapAPI: 'http://localhost:8000/api/map/',
  wineryAPI: 'http://localhost:8000/api/winery/',
  addMapWinery: `http://localhost:8000/api/map/:map_id/winery/:winery_id`
}
class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      maps: [{}],
      theWineries: [],
      selectedWineries: [],
      theDirections: [],
      style: {
        one: {display: 'block'},
        two: {display: 'none'},
        three: {display: 'none'}
      },
      tabs: {
        tabone: {backgroundColor: '#B88AAC', color: 'white'},
        tabtwo: {backgroundColor: 'white'},
        tabthree: {backgroundColor: 'white'}
      },
      mapstyle: {
        one: {display: 'block'},
        two: {display: 'none'},
        three: {display: 'none'}
      },
      maptabs: {
        tabone: {backgroundColor: '#B88AAC', color: 'white'},
        tabtwo: {backgroundColor: 'white'},
        tabthree: {backgroundColor: 'white'}
      },

      }
      this.handleClick = this.handleClick.bind(this);
      this.handleAddWinery = this.handleAddWinery.bind(this);
      this.handleDeleteWinery = this.handleDeleteWinery.bind(this);
  }

  handleAddWinery(wineryID){
    fetch(mapAPIs.mapAPI + this.props.mapID + `/winery/` + wineryID, {method: 'PUT'})
      .then((response) => response.json())
        .then((maps) => this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          newState.maps = maps;
          newState.selectedWineries = maps.wineries;
          return newState;
        }))
  }
  handleDeleteWinery(wineryID){
    fetch(mapAPIs.mapAPI + this.props.mapID + `/winery/` + wineryID, {method: 'DELETE'})
      .then(response => response.json())
        .then(maps => this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          newState.maps = maps;
          newState.selectedWineries = maps.wineries;
          return newState;
        }))
  }

  handleMarkerClick(){
    console.log("You Clicked the Marker")
  }

  handleClick(id){
    if(id === 1)
    {
      this.setState( (prevState) => {
        const newState = Object.assign({}, prevState);
        newState.style.one = {display: 'block'};
        newState.style.two = {display: 'none'};
        newState.style.three = {display: 'none'};
        newState.tabs.tabone = {backgroundColor: '#B88AAC', color: 'white'};
        newState.tabs.tabtwo = {backgroundColor: 'white', color: 'black'};
        newState.tabs.tabthree = {backgroundColor: 'white', color: 'black'};
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
        newState.tabs.tabone = {backgroundColor: 'white', color: 'black'};
        newState.tabs.tabtwo = {backgroundColor: '#B88AAC', color: 'white'};
        newState.tabs.tabthree = {backgroundColor: 'white', color: 'black'};
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
        newState.tabs.tabone = {backgroundColor: 'white', color: 'black'};
        newState.tabs.tabtwo = {backgroundColor: 'white', color: 'black'};
        newState.tabs.tabthree = {backgroundColor: '#B88AAC', color: 'white'};
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
        newState.maptabs.tabone = {backgroundColor: '#B88AAC', color: 'white'};
        newState.maptabs.tabtwo = {backgroundColor: 'white', color: 'black'};
        newState.maptabs.tabthree = {backgroundColor: 'white', color: 'black'};
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
        newState.maptabs.tabone = {backgroundColor: 'white', color: 'black'};
        newState.maptabs.tabtwo = {backgroundColor: '#B88AAC', color: 'white'};
        newState.maptabs.tabthree = {backgroundColor: 'white', color: 'black'};
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
        newState.maptabs.tabone = {backgroundColor: 'white', color: 'black'};
        newState.maptabs.tabtwo = {backgroundColor: 'white', color: 'black'};
        newState.maptabs.tabthree = {backgroundColor: '#B88AAC', color: 'white'};
        return newState;
      });
    }
    console.log('This is the id passed down ', id);
  }

  componentDidMount(){

    fetch('http://localhost:8000/api/winery')
      .then((response) => response.json())
        .then((wineries) => this.setState({theWineries: wineries}))
    fetch(mapAPIs.mapAPI + this.props.mapID)
      .then((response) => response.json())
        .then((maps) => this.setState({maps: maps, selectedWineries: maps.wineries}))

  }

  render() {
      // Generate Vineyard Component for all available Vineyards availbe for Itinerary ... TODO: refactor to remove alreayd added
      let vineyards = this.state.theWineries.map((props, index, wineries) => {
        return (
          <Vineyards
            {...props}
            key={index}
            value={props._id}
            onWineryClick={this.handleAddWinery}
            onWinemap={false}
          />
        )
      });
      // Generate Vineyard Component for those currently on Itinerary
      let selectedVineyards = this.state.selectedWineries.map((props, index, wineries) => {
        return (
          <Vineyards
            {...props}
            key={index}
            value={props._id}
            onDeleteWineryClick={this.handleDeleteWinery}
            onWinemap={true}
          />
        )
      });
      let wayptDirections = this.state.selectedWineries.map((vineyard) => {return {location: {lat: vineyard.maps.lat, lng: vineyard.maps.lng}}} );

      let markers = this.state.selectedWineries.map((vineyard, index) => {
        let pos = {
          lat: vineyard.maps.lat,
          lng: vineyard.maps.lng
        }
        return (<MapMarker onClick={this.handleMarkerClick} key={index+1} title={vineyard.name} position={pos} />);
      });

    return (

      <div>

          <div className='row'>
            <div className='col-5'>
              <div className='title'>{this.state.maps.title}</div>
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
                  name={'Trip Details'}
                  tabs={this.state.maptabs.tabthree}
                />
              </div>
              <div className='map-parent' style={this.state.mapstyle.one}>
                <div className='map-container'>
                  <MapGoogle
                    displayMap={true}
                    displayDirections={false}
                    wayptDirections={wayptDirections}
                    google={this.props.google}>
                    {markers}
                  </MapGoogle>
                </div>
              </div>
              <div className="the-directions" style={this.state.mapstyle.two}>
                <div>
                  <MapGoogle
                    originDir={this.props.origin}
                    destDir={this.props.destination}
                    wayptDirections={wayptDirections}
                    displayMap={false}
                    displayDirections={true}
                    google={this.props.google}>
                  </MapGoogle>
                </div>
              </div>
              <div className="trip-details" style={this.state.mapstyle.three}>
                <TripDetails
                  scheduleDate={this.state.maps.scheduleDate}
                  startTime={this.state.maps.startTime}
                  wineRegion={this.state.maps.wineRegion}
                  />
              </div>
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
                name={'Partners'}
                tabs={this.state.tabs.tabthree}
              />
            </div>
            <div  className="active" style={this.state.style.one}>
              {selectedVineyards}
            </div>
            <div className="active" style={this.state.style.two}>
              {vineyards}
            </div>
            <div className="active" style={this.state.style.three}>
              <div>
                <h5>Overnights</h5>
                <Link style={{color: 'black'}} target='blank' to='http://www.airbnb.com'>AirBnB</Link>
                <Link style={{color: 'black'}} target='blank' to='http://www.vrbo.com'>VRBO</Link>
              </div>
              <div>
                <h5>Restaurants</h5>
                <Link style={{color: 'black'}} target='blank' to='http://www.opentable.com'>OpenTable</Link>
                <Link style={{color: 'black'}} target='blank' to='http://www.yelp.com'>Yelp</Link>
              </div>
              <div>
                <h5>Wine Tours</h5>
                <Link style={{color: 'black'}} target='blank' to='http://www.platypustours.com'>Platypus Tours</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
  }
}
Map.propTypes = {
  mapID: PropTypes.string
}

Map.defaultProps = {
  mapID: '5ac3c49cdd7acc685ca6fe28',
  origin: { lat: 38.6640092, lng: -122.9342897 },
  destination: { lat: 37.759703, lng: -122.428093 }
}
export default GoogleApiWrapper({
  apiKey: mykey
})(Map);
// TODO:
// TODO: Add a map function component to place MAP on a spot on the page
// => Call data
// TODO: Add a new winery that can be added to the map => reRender page upon delivery
