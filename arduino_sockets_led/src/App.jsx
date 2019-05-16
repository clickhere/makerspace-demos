import React, { Fragment } from 'react';
import './assets/styles.scss';
import LightSwitch from './components/LightSwitch';
function App() {
  return (
    <Fragment>
      <div className="App container">
        <LightSwitch/>
      </div>
    </Fragment>
  );
}

export default App;
