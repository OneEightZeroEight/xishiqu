import React, { Component } from 'react';

class Lunbo extends Component {
	getbannerdata(){
		React.axios.get('http://localhost:1234/getIndexDate',{
			params:{
				cityCode:'020'
			}
		})
		.then(function (res) {
	    	console.log(res);
	  })
	  	.catch(function (error) {
	    	console.log(error);
	  });
	}
	componentDidMount(){
		 this.getbannerdata();
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
