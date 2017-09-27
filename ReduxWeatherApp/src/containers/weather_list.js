import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from '../components/graph';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  
  
  renderWeather(cityData) {
    const cityName = cityData.city.name
    const temps = cityData.list.map(day => day.main.temp - 273);
    const pressures = cityData.list.map(day => day.main.pressure);
    const humidities = cityData.list.map(day => day.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Graph data={temps} color="orange" units="C" /></td>
        <td><Graph data={pressures} color="blue" units="hPa"/></td>
        <td><Graph data={humidities} color="black" units="%"/></td>
      </tr>
      
    );
  }
  
  render() {
    return (
      <table className="table table-hover">
        
        <thead>
          <tr>
            <th> City </th>
            <th> Temperture (C) </th>
            <th> Pressure (hPa) </th>
            <th> Humity (%) </th>
          </tr>
        </thead>
        
        
        <tbody>
          {this.props.weather.map( this.renderWeather )}
        </tbody>
     
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}


export default connect(mapStateToProps)(WeatherList);