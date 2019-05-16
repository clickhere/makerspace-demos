import React, { Component, Fragment } from 'react';
import socketIOClient from "socket.io-client";
import '../assets/_switch.scss';

const socket = socketIOClient('http://localhost:3000');

class LightSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lightOn: '',
    };

    this.handleChange = this.handleChange.bind(this);

    socket.on('connect',function(){
      socket.emit('message', 'Hello server');
    });
  }

  handleChange(event) {
    this.setState({lightOn: event.target.checked});

    if (this.state.lightOn) {
      socket.emit("led:off");
    } else {
      socket.emit("led:on");
    }
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
