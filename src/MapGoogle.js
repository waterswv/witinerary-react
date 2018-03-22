import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class MapGoogle extends Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    const {origin, destination, waypoints} = this.props;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      },
      reqst: {
        origin: this.props.originDir ||origin,
        destination: this.props.destDir || destination,
        waypoints: this.props.wayptDirections || waypoints
      }
    }
  }
  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    })
  }
  loadDirections(){
  if (this.props && this.props.google) {
    // google is available
    const {google} = this.props;
    const maps = google.maps;
    console.log('Does loadDirections() fire...')
    // refs.map may need to be ref.mapgoogle ....
    const mapRef = this.refs.mapgoogle;
    const node = ReactDOM.findDOMNode(mapRef);

    let {origin, destination, waypoints} = this.state.reqst;

    const request = Object.assign({}, {
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    })

    this.directionsService = new maps.DirectionsService();
    this.directionsDisplay = new maps.DirectionsRenderer({panel: node})
    this.directionsService.route(request, (response, status) => {
      if(status === 'OK')
      {
        this.directionsDisplay.setDirections(response);
      }
    });

    }
  }
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;
      console.log('Does loadMap() fire...')
      // refs.map may need to be ref.mapgoogle ....
      const mapRef = this.refs.mapgoogle;
      const node = ReactDOM.findDOMNode(mapRef);

      // setting up actual map object with Google API reguired inputs
      let {initialCenter, zoom} = this.props;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });
      this.map = new maps.Map(node, mapConfig);

      let centerChangedTimeout;
      this.map.addListener('dragend', (evt) => {
        if (centerChangedTimeout) {
          clearTimeout(centerChangedTimeout);
          centerChangedTimeout = null;
        }
        centerChangedTimeout = setTimeout(() => {
          this.props.onMove(this.map);
        }, 0);
      })
  }
}
// Using Google Maps .panTo method to recenter when State of Center is updated.
recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }

  componentDidMount() {
    // This if statement uses the Navigator geolocation object for assessing the location of the device that is accessing the website.

    if (this.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
        }
    }
    if(this.props.displayMap)
      {this.loadMap();}
    if(this.props.displayDirections){
      this.loadDirections();}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {

        if(this.props.displayMap)
          {this.loadMap();}
        if(this.props.displayDirections)
          {this.loadDirections();}

    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }
  render() {
    return (
      <div className='mapforgoogle' ref='mapgoogle'>

        { this.props.displayMap ? this.renderChildren() : null }
      </div>
    )
  }
}
MapGoogle.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool,
  displayMap: PropTypes.bool,
  displayDirections: PropTypes.bool,
  origin: PropTypes.object,
  destination: PropTypes.object,
  onMove: PropTypes.func

}
MapGoogle.defaultProps = {
  zoom: 10,
  // Unti Wines, Dry Creek Valley, { lat: 38.6640092, lng: -122.9342897 } San Francisco Below by default...{lat: 37.759703, lng: -122.428093}
  initialCenter: {lat: 38.6640092, lng: -122.9342897 },
  centerAroundCurrentLocation: false,
  displayMap: true,
  displayDirections: false,
  origin: { lat: 38.6640092, lng: -122.9342897 },
  destination: { lat: 37.759703, lng: -122.428093 },
  waypoints: [],
  onMove: function() { console.log(" You've Moved! ")}

}
export default MapGoogle;
