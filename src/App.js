import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './components/pages/Home/Home.jsx';
import CityList from './components/pages/City/CityList.jsx';
import Detail from './components/pages/Detail/Detail.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">

      
      	<Route path="/home" component={Home} />
      	<Route path="/city" component={CityList} />
    	  	<Route path="/detail" component={Detail} />

      </div>
    );
  }
}

export default App;
