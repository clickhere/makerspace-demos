import React, {Component, Fragment} from 'react';
import './assets/styles.scss';
import LightSwitch from './components/LightSwitch';
import TemperatureDisplay from './components/Temperature';
import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://localhost:3000');

class App extends Component {

  constructor(props) {
    super(props);

    socket.on('connect',function(){
      socket.emit('message', 'Hello server');
    });
  }

  render() {
    return (
      <Fragment>
        <div className="App container">
          <TemperatureDisplay/>
          <LightSwitch/>
        </div>
      </Fragment>
    );
  }
}

export default App;
