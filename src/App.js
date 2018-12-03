import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './components/pages/Home/Home.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/home/" component={Home} />
      </div>
    );
  }
}

export default App;
