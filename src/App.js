import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './components/pages/Home/Home.jsx'

import CityList from './components/pages/City/CityList.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Home/>
      
      	<Route path="/home" component={Home} />
      	<Route path="/city" component={CityList} />

      </div>
    );
  }
}

export default App;
