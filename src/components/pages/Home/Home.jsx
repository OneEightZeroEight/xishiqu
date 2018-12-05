import React, { Component } from 'react';

import Xheader from '../../common/Xheader.jsx';
import Xfooter from '../../common/Xfooter.jsx';

// import Lunbo from './Lunbo.jsx';

import Xcotegory from '../../common/Xcategory.jsx';

class Home extends Component {
	render() {
		return (
			<div id="wrapper-home">
				<div id="home" className="page">
					<Xheader history={this.props.history} />
					{/*<Lunbo />*/}
					<div className="block-wrapper">
						<Xcotegory />
					</div>
				</div>
				<Xfooter />
			</div>
		);
	}
}

export default Home;
