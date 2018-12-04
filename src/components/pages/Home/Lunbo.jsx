import React, { Component } from 'react';
import Swiper from 'swiper'
class Lunbo extends Component {
	constructor(props){
		super(props);
		this.props=props;
		this.state={
			bannerdata:[]
		}
	}
	getbannerdata(){
		React.axios.get('http://localhost:1234/getIndexDate',{
			params:{
				cityCode:'020'
			}
		})
		.then(function (res) {
	    	console.log(res);
	    	this.setState({
	    		bannerdata:res.data
	    	})
	    	console.log(this.state.bannerdata);
	  })
	  	.catch(function (error) {
	    	console.log(error);
	  });
	}
	lunbo(){
		var swiper = new Swiper('.swiper-container', {
			loop: true,
	      spaceBetween: 30,
	      centeredSlides: true,
	      autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
	}
	componentDidMount(){
		 this.getbannerdata();
		 this.lunbo();
	}
  render() {
    return (
      <div className="Lunbo">
        <div className='block-wrapper'>
    		<div className="swiper-container">
		    <div className="swiper-wrapper">
		      <div className="swiper-slide">Slide 1</div>
		      <div className="swiper-slide">Slide 2</div>
		      <div className="swiper-slide">Slide 3</div>
		      <div className="swiper-slide">Slide 4</div>
		    </div>
		    <div className="swiper-pagination"></div>

		  </div>
        </div>
      </div>
    );
  }
}

export default Lunbo;
