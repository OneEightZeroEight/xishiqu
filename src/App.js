import React, { Component } from 'react';

import { Route ,Redirect,Switch } from "react-router-dom";
import Home from './components/pages/Home/Home.jsx'
import List from './components/pages/List/List.jsx'

import CityList from './components/pages/City/CityList.jsx';
import Detail from './components/pages/Detail/Detail.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">       	
      <Switch>
      
        <Route path="/home/" component={Home} />

        <Route path="/list/" component={List} />
       <Redirect exact from='/home/' to='/home/one/' />


       <Route path="/city" component={CityList} />
    	 <Route path="/detail/:name" component={Detail} />
    	 <Redirect exact from='/home/' to='/home/one/' />

        </Switch>

      </div>
    );
  }
}

export default App;
