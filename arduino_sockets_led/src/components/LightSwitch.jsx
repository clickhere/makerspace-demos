import React, { Component, Fragment } from 'react';
import socketIOClient from "socket.io-client";
import '../assets/_switch.scss';

const socket = socketIOClient('http://localhost:3000');

class LightSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lightOn: '',
      temp: ''
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({lightOn: event.target.checked});

    if (this.state.lightOn) {
      socket.emit("led:off");
      document.body.classList.remove('lit');
    } else {
      socket.emit("led:on");
      document.body.classList.add('lit');
    }
  }

  renderStatus() {
    return this.state.lightOn ? "Lights are on" : "Lights are off";
  }

  render() {
    return (
      <Fragment>
        <div className="switch--container">
          <label className="switch">
            <input id="light_switch" type="checkbox" value={this.state.lightOn} onChange={this.handleChange}/>
            <span className="slider"/>
          </label>
        </div>
      </Fragment>
    );
  }
}

export default LightSwitch;
