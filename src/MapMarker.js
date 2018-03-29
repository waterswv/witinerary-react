import {Component} from 'react';
import PropTypes from 'prop-types';


function camelize(str) {
  return str.split(' ').map( (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

export class MapMarker extends Component {


  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
    (this.props.position !== prevProps.position)) {
      this.renderMarker();
    }
  }
  renderMarker() {
    let { map, google, position, mapCenter } = this.props;
    const evtNames = ['click'];
    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
        map: map,
        position: position,
        title: this.props.title
      };
      this.marker = new google.maps.Marker(pref);

      evtNames.forEach(e => {
        this.marker.addListener(e, this.handleEvent(e));
      });
  }

  handleEvent(evt) {

    return (e) => {
      const evtName = `on${camelize(evt)}`;
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.marker, e);
      }
    }
  }
  render(){
    return null;
  }
}

MapMarker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object,

}

MapMarker.defaultProps = {
  title: 'Vineyard'
}
export default MapMarker;
