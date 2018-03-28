import React, {Component} from 'react';
import './Map.css';
import Vineyards from './Vineyards';
import {Tab} from './Tab'
import MapsContainer from './MapsContainer';
import TripDetails from './TripDetails';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const mapAPI = 'http://localhost:8000/api/map/';

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
    fetch(mapAPI + this.props.mapID)
      .then((response) => response.json())
        .then((maps) => this.setState({maps: maps, selectedWineries: maps.wineries}))

  }

  render() {
      // Generate Vineyard Component for all available Vineyards availbe for Itinerary ... TODO: refactor to remove alreayd added
      let vineyards = this.state.theWineries.map((props, winery, index) => {
        return (
          <Vineyards
            key={index}
            {...props}
          />
        )
      });
      // Generate Vineyard Component for those currently on Itinerary
      let selectedVineyards = this.state.selectedWineries.map((props, winery, index) => {
        return (
          <Vineyards
            key={index}
            {...props}
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
            <div style={this.state.mapstyle.one}>
              <MapsContainer
                vineyards={this.state.selectedWineries}
                displayMap={true}
                displayDirections={false}
              />
            </div>
              <div className="the-directions" style={this.state.mapstyle.two}>
                  <MapsContainer
                    vineyards={this.state.selectedWineries}
                    displayMap={false}
                    displayDirections={true}

                  />
              </div>
              <div className="active" style={this.state.mapstyle.three}>
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

            <span  className="active" style={this.state.style.one}>

              {selectedVineyards}
            </span>
            <span className="active" style={this.state.style.two}>

              {vineyards}
            </span>
            <span className="active" style={this.state.style.three}>
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
            </span>


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
  mapID: '5a888fbb3dec7f7002c9a4a9'
}
export default Map;
// TODO:
// TODO: Add a map function component to place MAP on a spot on the page
// => Call data
// TODO: Add a new winery that can be added to the map => reRender page upon delivery
