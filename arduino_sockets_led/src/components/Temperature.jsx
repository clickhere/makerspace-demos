import React, { Component, Fragment } from 'react';
import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://localhost:3000');

class TemperatureDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temp: ''
    };


    socket.on('temp', temp => {
      this.setState({temp});
    });
  }

  renderStatus() {
    return this.state.temp + "°F"
  }

  render() {
    return (
      <div className="temperature--container">
        <h1>{this.renderStatus()}</h1>
        <p>Current Temperature</p>
      </div>
    );
  }
}

export default TemperatureDisplay;
