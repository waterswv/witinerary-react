import React, {Component} from 'react';
import './Map.css';
import Vineyards from './Vineyards';
import TripDetails from './TripDetails';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {GoogleApiWrapper} from 'google-maps-react';


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


      }

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



    return (

      <div>

          <div className='row'>
            <div className='col-5'>
              <div className='title'>{this.state.maps.title}</div>
            <div className='map-card'>
              <div className='map-tabs'>

              </div>
              <div className='map-parent' >
                <div className='map-container'>

                </div>
              </div>
              <div className="the-directions" >
                <div>

                </div>
              </div>
              <div className="trip-details" >
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
