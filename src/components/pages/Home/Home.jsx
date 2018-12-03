import React, { Component } from 'react';

import Xheader from '../../common/Xheader.jsx';
import Xfooter from '../../common/Xfooter.jsx';

class Home extends Component {
	render() {
		return (
			<div id="wrapper-home">
				<div id="home" className="page">
					<Xheader />

				</div>
				<Xfooter />
			</div>
		);
	}
}

export default Home;
