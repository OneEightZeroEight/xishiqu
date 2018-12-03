import React, { Component } from 'react';
import Huaju from './Huaju.jsx'
import Lunbo from './Lunbo.jsx'

class Home extends Component {
  render() {
    return (
      <div className="Home">
      	<div id='wrapper-home'>
        	<div id='home' className='page'>

	        	<Lunbo></Lunbo>
	        	<Huaju></Huaju>
        	</div>

        </div>
      </div>
    );
  }
}

export default Home;
