import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      //options object
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
      
    });
  }
  
  render() {
    //this.refs.map - pulls up html element, see above
    return <div ref="map" />
    
  }
  
}


export default GoogleMap;
