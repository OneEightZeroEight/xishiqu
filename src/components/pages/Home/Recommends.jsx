import React, { Component } from 'react';
class Recommends extends Component {
	constructor(props){
		super(props);
		this.props=props;
		this.state={
			commendData:[],
			actTitleData:[],
			firstData:''

		}
	}
	getData(){
		React.axios.get('http://localhost:1234/getIndexDate',{
			params:{
				cityCode:'020'
			}
		})
		.then( (res)=> {
	    	let commendData = res.data.result.mktInfo;
	    	let arr = [];
	    	let actTitleArr=[];
	    	for(let c in commendData){
	    		arr.push(commendData[c].imgUrl);
	    		actTitleArr.push(commendData[c].actTitle)
	    	}
	    	this.setState({
	    		commendData:arr,
	    		actTitleData:actTitleArr,
	    		firstData:commendData[0]
	    	})
	    	
	  })
	  	.catch(function (error) {
	    	console.log(error);
	  });
	}
	componentWillMount(){
		this.getData();
	}
  render() {
    return (
<div className="recommends">
    <div className="main">
        <div className="item">
            <div className="img" style={{backgroundImage: `url(${this.state.commendData[0]})`}}>
            </div>
            <h4 className="title">
                限时{this.state.actTitleData[0]}
            </h4>
            <div className="count-down">
                <span className="i">
                    00
                </span>
                天
                <span className="i">
                    00
                </span>
                :
                <span className="i">
                    00
                </span>
                :
                <span className="i">
                    00
                </span>
            </div>
            <div className="next">
                下一场 {this.state.firstData.nextStartTime}
            </div>
        </div>
    </div>
    <div className="minor">
        <div className="item">
            <div className="left">
                <h4 className="title">
                    {this.state.actTitleData[1]}
                </h4>
                <div className="remark">
                </div>
            </div>
            <div className="img" style={{backgroundImage: `url(${this.state.commendData[1]})`}}>
            </div>
        </div>
        <div className="item">
            <div className="left">
                <h4 className="title">
                    {this.state.actTitleData[2]}
                </h4>
                <div className="remark">
                    赢100西米缤纷活动进行中
                </div>
            </div>
            <div className="img" style={{backgroundImage: `url(${this.state.commendData[2]})`}}>
            </div>
        </div>
    </div>
</div>
);
  }
}

export default Recommends;
