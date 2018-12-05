import React, { Component } from 'react';
import { Route ,Redirect,Switch } from "react-router-dom";
import Home from './components/pages/Home/Home.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path="/home/" component={Home} />
       <Redirect exact from='/home/' to='/home/one/' />

        </Switch>
      </div>
    );
  }
}

export default App;
