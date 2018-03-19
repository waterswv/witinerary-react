import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class MapGoogle extends Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
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
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

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
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }
  render() {
    return (
      <div className='mapforgoogle' ref='mapgoogle'>
        {this.renderChildren()}
      </div>
    )
  }
}
MapGoogle.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool

}
MapGoogle.defaultProps = {
  zoom: 10,
  // Unti Wines, Dry Creek Valley, { lat: 38.6640092, lng: -122.9342897 } San Francisco Below by default...
  initialCenter: {lat: 37.759703, lng: -122.428093},
  centerAroundCurrentLocation: false
}
export default MapGoogle;
