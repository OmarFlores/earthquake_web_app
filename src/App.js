import React, { Component } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import MainViewContainer from './overflow/MainViewContainer';
import L from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow
});

class App extends Component {

  render() {
    return (
    <div className="App">
      <MainViewContainer/>
    </div>
    );
  }
}

export default App;