import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MapMarker extends Component {



  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
    (this.props.position !== prevProps.position)) {
      this.renderMarker();
    }
  }
  renderMarker() {
    let { map, google, position, mapCenter } = this.props;

    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);
  }
  render(){
    return null;
  }
}

MapMarker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
}

MapMarker.defaultProps = {

}
export default MapMarker;
