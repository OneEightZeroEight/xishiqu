import React, { Component } from 'react';

class CityList extends Component {
	constructor(props){
		super(props);
		this.state = {
			cityData : []
		}
	}


	getCityList(){
		React.axios.get(`http://localhost:1234/getCityList`
	      )
	      .then((res)=>{
	        	this.setState({
	        		cityData : res.data.result
	        	})
	        	console.log(this.state.cityData);
				for(var i in this.state.cityData){
					console.log(i);
					// console.log(i,this.state.cityData[i])
					for(var j=0;j<this.state.cityData[i].length;j++){
					    // console.log(i.toUpperCase(),this.state.cityData[i][j].areaName,this.state.cityData[i][j].areaCode)
					}
				}
	        	
	      })
	      .catch((err)=>{
	        
	        console.log(err)
	      })
	}

	componentDidMount(){
		this.getCityList();
		
	}

	render() {
		return (
		    <div id="wrapper-city">
				   <div id="city" className="page">
				    <header className="header">
				     <i className="icon icon-angle-left"></i> 选择城市 
				    </header> 
				    <div className="location">
				      当前定位城市：
				     <span className="city--name">大连</span>
				    </div>


				    <ul className="list list-unstyled">
				     <li className="group"><h3 className="group__title">a</h3> 
				      <ul className="group__list">
				       <li className="group__item">澳门</li>
				      </ul></li>
				     <li className="group"><h3 className="group__title">b</h3> 
				      <ul className="group__list">
				       <li className="group__item">北京</li>
				      </ul></li>
				     
				     
				     
				     <li className="group"><h3 className="group__title">z</h3> 
				      <ul className="group__list">
				       <li className="group__item">珠海</li>
				       <li className="group__item">中山市</li>
				       <li className="group__item">郑州</li>
				      </ul></li>
				    </ul>


				   </div> 
				    
				   <div className="bottom-toolbar">
				    <div className="item">
				     <span className="i home"></span> 
				     <span className="text">首页</span>
				    </div>
				    <div className="item">
				     <span className="i category"></span> 
				     <span className="text">分类</span>
				    </div>
				    <div className="item">
				     <span className="i article"></span> 
				     <span className="text">同趣</span>
				    </div>
				    <div className="item">
				     <span className="i ticket"></span> 
				     <span className="text">转票</span>
				    </div>
				    <div className="item">
				     <span className="i my"></span> 
				     <span className="text">我</span>
				    </div> 
				    <div>
				      
				     
				    </div>
				   </div>
				  </div>
			);
	}
}

export default CityList;
