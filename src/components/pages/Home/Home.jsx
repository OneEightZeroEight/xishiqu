import React, { Component } from 'react';
import Huaju from './Huaju.jsx'
import Lunbo from './Lunbo.jsx'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Lunbo></Lunbo>
        <Huaju></Huaju>
      </div>
    );
  }
}

export default Home;
