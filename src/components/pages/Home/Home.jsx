import React, { Component } from 'react';


import Huaju from './Huaju.jsx'
import Lunbo from './Lunbo.jsx'
import Xheader from '../../common/Xheader.jsx';
import Xfooter from '../../common/Xfooter.jsx';
import Xcotegory from '../../common/Xcategory.jsx';
import Recommends from './Recommends.jsx'
import { Route } from "react-router-dom";
import Show from './Show.jsx'
import List from './List.jsx'
import Concert from './Concert.jsx'

class Home extends Component {
	constructor(props){
        super(props);
        this.props = props;
    }
	render() {
		return (
			<div id="wrapper-home">
				<div id="home" className="page">

					<Xheader history={this.props.history} />
					<div className="block-wrapper">
						<Lunbo></Lunbo>
					</div>
					<div className="block-wrapper">
						<Xcotegory />
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
		          	<div className="report"><span className="text">举报电话：<a href="tel:021-52398129" className="tel">021-52398129-403</a></span></div>
				</div>
				<Xfooter />
			</div>
		);
	}
}

export default Home;
