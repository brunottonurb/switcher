import React, { Component } from 'react';
import './App.css';
import SwitchesContainer from './containers/SwitchesContainer';
import ErrorDisplay from './containers/ErrorDisplay';

class App extends Component {
  render() {
    return [
      <ErrorDisplay key="1" />,
      <SwitchesContainer key="2" />,
    ];
  }
}

export default App;
