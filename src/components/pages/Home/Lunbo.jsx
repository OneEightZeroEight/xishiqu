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
	getBannerData(){
		React.axios.get('http://localhost:1234/getIndexDate',{
			params:{
				cityCode:'020'
			}
		})
		.then( (res)=> {
	    	console.log(res);
	    	this.setState({
	    		bannerdata:res.data.result.bannerInfo
	    	},()=>{
	    		this.lunbo();
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
		 this.getBannerData();
	}
  render() {
    return (
      <div className="Lunbo">
        <div className='block-wrapper'>
    		<div className="swiper-container banners">
		    <div className="swiper-wrapper">
		      {
		      	(()=>{
		      		let bannerHTML=this.state.bannerdata.map((item,idx)=>{
						return <div key={idx} className="swiper-slide">
							<img src={item.imgUrl} />
						</div>
					})
					return bannerHTML
		      	})()
		      }
		    </div>
		    <div className="swiper-pagination"></div>

		  </div>
        </div>
      </div>
    );
  }
}

export default Lunbo;
