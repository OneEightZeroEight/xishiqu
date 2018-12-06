import React,{ Component } from 'react';

class NodeList extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			listData: [],
			hasMore: false
		}
	}

	getCategoryList(frontCate,date,order,page,cityCode){
		React.axios.get(`http://localhost:1234/getCategoryList`, {
		    params: {
		      frontCate: frontCate,
		      date: date,
		      order: order,
		      page: page,
		      cityCode: cityCode
		    }
		  })
	      .then((res)=>{
	      		// console.log(res.data.result);
	        	this.setState({
	        		hasMore: res.data.result.hasMore,
	        		listData: res.data.result.list
	        	})
	        	console.log(this.state.listData);
	      })
	      .catch((err)=>{
	        
	        console.log(err)
	      })
	}

	componentDidMount(){
		this.getCategoryList('','','-1','1','020');
	}

	render(){
		return (
			<div className="node-list">
    			{
    				(()=>{
    					return this.state.listData.map((item,index)=>{
    						return (
    							<div key={index} className="node node--activity horizontal">
				        			<div className="thumbnail" 
				        				style={{backgroundImage: `url(${item.actImgUrl})`}}>
						            </div>
						        	<div className="main">
						            	<h1 className="title">{item.actName}</h1>
						            	<div className="date">{item.actTime}</div>
						            	<div className="venue">{item.veName}</div>
						            	<div className="tags"></div>
						            	<div className="price">
						                	<div>
						                    <span>￥{item.lowPrice}</span>
						                    <span className="sub">起</span>
						                    </div>
						                </div>
						            	<div className="quote">{item.intro}</div>
						            </div>
						        
						        </div>
    						)
    					})
    				})()
    			}

			    <div className="loading" style={{display: "none"}}></div>
			</div>
		)
	}
}

export default NodeList;