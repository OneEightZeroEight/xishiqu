import React, { Component } from 'react';
import Huaju from './Huaju.jsx'
import Lunbo from './Lunbo.jsx'
import Recommends from './Recommends.jsx'
import { Route } from "react-router-dom";
import Show from './Show.jsx'
import List from './List.jsx'
import Concert from './Concert.jsx'
import MovieData from './MovieData.jsx'

class Home extends Component {
  constructor(props){
    super(props);
    this.props=props;
  }
  render() {
    return (
      <div className="Home">
      	<div id='wrapper-home'>
        	<div id='home' className='page'>

	        	<Lunbo></Lunbo>
            <Recommends></Recommends>
            <Show history={this.props.history}></Show>
            <Route path="/home/one/" component={List} />
            <Route path="/home/two/" component={List} />
            <Route path="/home/three/" component={List} />
            <Route path="/home/four/" component={List} />
            <Route path="/home/five/" component={List} />
            <Route path="/home/six/" component={List} />
            <Route path="/home/seven/" component={List} />
            <Concert></Concert>

	        	<Huaju></Huaju>
        	</div>

        </div>
      </div>
    );
  }
}

export default Home;
