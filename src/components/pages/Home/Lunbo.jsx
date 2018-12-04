import React, { Component } from 'react';

class Lunbo extends Component {
	getBannerData(cityCode){
		React.axios.get(`http://localhost:1234/getIndexData?cityCode=${cityCode}`
	      )
	      .then((res)=>{
	        	console.log(res);
	      })
	      .catch((err)=>{
	        
	        console.log(err)
	      })
	}

	componentDidMount(){
		this.getBannerData('020');
		
	}

	render() {
		return (
		    <div className="Lunbo">
		    	<div id='wrapper-home'>
		    		<div id='home' className='page'>
		    			<div className='block-wrapper'>

		    			</div>
			    	</div>
			    </div>
			  </div>
			);
	}
}

export default Lunbo;
