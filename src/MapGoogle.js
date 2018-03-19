import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class MapGoogle extends Component {

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      // refs.map may need to be ref.mapgoogle ....
      const mapRef = this.refs.mapgoogle;
      const node = ReactDOM.findDOMNode(mapRef);

      // setting up actual map object with Google API reguired inputs
      let zoom = 10;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      });
      this.map = new maps.Map(node, mapConfig);
  }
}
  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  render() {
    return (
      <div className='mapforgoogle' ref='mapgoogle'>

      </div>
    )
  }
}

export default MapGoogle;
