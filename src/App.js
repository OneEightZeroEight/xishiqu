import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from './components/pages/Home/Home.jsx';

import CityList from './components/pages/City/CityList.jsx';

import Search from './components/pages/Search/Search.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Route path="/home" component={Home} />
      	<Route path="/city" component={CityList} />
      	<Route path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
