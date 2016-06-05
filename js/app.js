'use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var MapGL = require('react-map-gl');
var r = require('r-dom');

var access = 'pk.eyJ1Ijoiam9hbm5lY2hlbmciLCJhIjoiYV9YSTdaZyJ9.tOevZpArPItdszzQl_GLJQ'

const App = React.createClass({

  getInitialState: function getInitialState() {
    return {
      viewport: {
        latitude: 39.8282,
        longitude: -98.5795,
        zoom: 3
      }
    }
  },

  render: function render() {
    return r(MapGL, {
      width: '100%',
      height: 600,
      zoom: this.state.viewport.zoom,
      style: {float: 'left'},
      latitude: this.state.viewport.latitude,
      longitude: this.state.viewport.longitude,
      mapboxApiAccessToken: access
    })
  }
});

var reactContainer = document.createElement('div');
document.body.appendChild(reactContainer);
ReactDOM.render(r(App), reactContainer);
