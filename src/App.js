import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Xheader from './components/common/Xheader.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Xheader />
      </div>
    );
  }
}

export default App;
