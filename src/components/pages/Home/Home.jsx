import React, { Component } from 'react';

import Huaju from './Huaju.jsx'
import Lunbo from './Lunbo.jsx'
import Xheader from '../../common/Xheader.jsx';

// class Home extends Component {
	// constructor(props){
 //        super(props);
 //        this.props = props;
 //    }
//   render() {
//     return (

//       <div className="wrapper-home">
//     	<div id="home" className="page">
//     		<Xheader/>
// 	        <Lunbo></Lunbo>
// 	        <Huaju></Huaju>
//           <div className="report"><span className="text">举报电话：<a href="tel:021-52398129" className="tel">021-52398129-403</a></span></div>
//         </div>
//        </div>

//     );
//   }


import Xfooter from '../../common/Xfooter.jsx';
import Xcotegory from '../../common/Xcategory.jsx';

class Home extends Component {
	constructor(props){
        super(props);
        this.props = props;
    }
	render() {
		return (
			<div id="wrapper-home">
				<div id="home" className="page">
		 			<Xheader/>
					<div className="block-wrapper">
							<Xcotegory />
					</div>
					<Lunbo></Lunbo>
		      		<Huaju></Huaju>
		          	<div className="report"><span className="text">举报电话：<a href="tel:021-52398129" className="tel">021-52398129-403</a></span></div>
				</div>
				<Xfooter />
			</div>
		);
	}

}

export default Home;
