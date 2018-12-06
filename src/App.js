import React, { Component } from 'react';
import { Route ,Redirect,Switch } from "react-router-dom";
import Home from './components/pages/Home/Home.jsx'
import listHeader from './components/pages/List/listHeader.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path="/home/" component={Home} />
        <Route path="/list/" component={listHeader} />
       <Redirect exact from='/home/' to='/home/one/' />

        </Switch>
      </div>
    );
  }
}

export default App;
