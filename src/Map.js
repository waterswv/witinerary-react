import React, {Component} from 'react';
import './Map.css';
import Vineyards from './Vineyards';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import {Container, Row, Col, Button, Collection, CollectionItem, } from 'react-materialize';


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
      map: [],
      theWineries: [],
      selectedWineries: [],
      theDirections: [],

      }

      this.handleAddWinery = this.handleAddWinery.bind(this);
      this.handleDeleteWinery = this.handleDeleteWinery.bind(this);
  }

  handleAddWinery(wineryID){
    fetch(mapAPIs.mapAPI + this.props.mapID + `/winery/` + wineryID, {method: 'PUT'})
      .then((response) => response.json())
        .then((map) => this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          newState.map = map;
          newState.selectedWineries = map.wineries;
          return newState;
        }))
  }
  handleDeleteWinery(wineryID){
    fetch(mapAPIs.mapAPI + this.props.mapID + `/winery/` + wineryID, {method: 'DELETE'})
      .then(response => response.json())
        .then(map => this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          newState.map = map;
          newState.selectedWineries = map.wineries;
          return newState;
        }))
  }

  componentDidMount(){

    fetch('http://localhost:8000/api/winery')
      .then((response) => response.json())
        .then((wineries) => this.setState({theWineries: wineries}))
    fetch(mapAPIs.mapAPI + this.props.mapID)
      .then((response) => response.json())
        .then((map) => this.setState({map: map, selectedWineries: map.wineries}))

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

      const { map } = this.state;


    return (

      <div>
        
        <Container>
          <Row>
            <Col><Button floating large className='red' waves='light' icon='add' /></Col>
          </Row>
        </Container>
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
