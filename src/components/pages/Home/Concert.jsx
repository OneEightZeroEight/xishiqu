import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Concert extends Component {
  constructor(props){
    super(props);
    this.props=props;
    this.state={
    	allData:[],
    	listData:[],
    	firstData:[]
    }
  }
  	getData(){
		React.axios.get('http://localhost:1234/getIndexData',{params:{
            cityCode:'020'
        }
    })
		.then( (res)=> {
	    	console.log(res.data);
	    	this.setState({
	    		allData:res.data.result.activityCateInfo[0],
	    		listData:res.data.result.activityCateInfo[0].mData,
	    		firstData:res.data.result.activityCateInfo[0].mData.shift()
	    	})
	    	console.log(this.state.listData)
	    	
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
<div className="Concert">
    <div className="block-wrapper">
        <h3 className="block__title">
            {this.state.allData.mTitle}
            <small>
                查看更多
            </small>
        </h3>
        <Link className="main-node" to={ '/detail/' + this.state.firstData.pinyinName }>
            <div className="node node--activity primary">
                <div className="bg" style={{backgroundImage: 'url("http://image3.xishiqu.cn/upload/activity/118/111/20181119002/v/b/9E466839-6A8D-FAFB-EEA1-D90077E96646.jpg")'}}>
                </div>
                <div className="mask">
                </div>
                <div className="thumbnail" style={{backgroundImage: `url(${this.state.firstData.actImgUrl})`}}>
                    <div className="thumbnail__hot">
                        <span>
                            {this.state.firstData.hotLevel}
                        </span>
                        ℃
                    </div>
                </div>
                <div className="main">
                    <h1 className="title">
                        {this.state.firstData.actName}
                    </h1>
                    <div className="quote">
                        {this.state.firstData.intro}
                    </div>
                    <div className="date">
                        {this.state.firstData.actTime}
                    </div>
                    <div className="price">
                        <div>
                            <span>
                                ￥{this.state.firstData.lowPrice}
                            </span>
                            <span className="sub">
                                起
                            </span>
                        </div>
                        <div>
                            在售卖家{this.state.firstData.sellerCount}家
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        <div className="node-list">
            <div className="wrapper" style={{width: '100.4rem'}}>
                {
                	(()=>{
                		return this.state.listData.map((item,idx)=>{
                			return (
                					<Link key={idx} className="node node--activity vertical" to={ '/detail/' +item.pinyinName }>
                    <div className="thumbnail" style={{backgroundImage: `url(${item.actImgUrl})`,width: '10rem'}}>
                    {
                    	(()=>{
                    		if(item.maxDiscount){
                    			return (
                    				<div className="thumbnail__tag">
                            <span>
                                {item.maxDiscount}
                            </span>
                            折 起
                        </div>
                    				)
                    		}
                    	})()
                    }
                        
                        <div className="thumbnail__hot">
                            <span>
                                {item.hotLevel}
                            </span>
                            ℃
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="title">
                            {item.actName}
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥{item.lowPrice}
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            {item.actTime}
                        </div>
                        <div className="venue">
                        </div>
                    </div>
                </Link>
                				)
                		})
                	})()
                }
                {/*<div className="node node--activity vertical">
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image4.xishiqu.cn/upload/activity/118/112/20181121001/v/b/440BD15D-DFC2-9979-A18A-4B8BC9D690AB.jpg")'}}>
                        <div className="thumbnail__hot">
                            <span>
                                104.8
                            </span>
                            ℃
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="title">
                            预订 谭咏麟演唱会—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥680.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            01.19 周六 19:30
                        </div>
                        <div className="venue">
                        </div>
                    </div>
                </div>
                <div className="node node--activity vertical">
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image.xishiqu.cn/upload/activity/118/110/20181103002/v/b/5CF0C8F9-FAD9-74C3-1532-DC42379D7A8F.jpg")'}}>
                        <div className="thumbnail__tag">
                            <span>
                                9.2
                            </span>
                            折 起
                        </div>
                        <div className="thumbnail__hot">
                            <span>
                                94.6
                            </span>
                            ℃
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="title">
                            动力火车演唱会—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥446.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            12.22 周六 19:30
                        </div>
                        <div className="venue">
                        </div>
                    </div>
                </div>
                <div className="node node--activity vertical">
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image6.xishiqu.cn/upload/activity/118/111/20181112001/v/b/2F8ADC07-9265-D47D-1F6B-7D813B6695A3.jpg")'}}>
                        <div className="thumbnail__hot">
                            <span>
                                102.4
                            </span>
                            ℃
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="title">
                            预订 伍佰 China Blue Rock Star演唱会—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥580.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            05.18 周六 19:30
                        </div>
                        <div className="venue">
                        </div>
                    </div>
                </div>
                <div className="node node--activity vertical">
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image4.xishiqu.cn/upload/activity/118/111/20181116001/v/b/324D4716-7C32-78D8-3883-120AA11B7805.jpg")'}}>
                        <div className="thumbnail__hot">
                            <span>
                                101.2
                            </span>
                            ℃
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="title">
                            杨乃文演唱会—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥570.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            12.14 周五 20:00
                        </div>
                        <div className="venue">
                        </div>
                    </div>
                </div>
                <div className="node node--activity vertical">
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image3.xishiqu.cn/upload/activity/118/112/20181129001/v/b/96DA1162-4618-7235-BDA3-4EC5D9E80384.jpg")'}}>
                        <div className="thumbnail__hot">
                            <span>
                                130.5
                            </span>
                            ℃
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="title">
                            千叶雄大粉丝见面会—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥980.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            12.16 周日 16:00
                        </div>
                        <div className="venue">
                        </div>
                    </div>
                </div>
                <div className="node node--activity vertical">
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image6.xishiqu.cn/upload/activity/118/112/20181122001/v/b/7080DDB0-6748-8D18-E48C-37C13FFD7C46.jpg")'}}>
                        <div className="thumbnail__hot">
                            <span>
                                0.0
                            </span>
                            ℃
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="title">
                            预订 中岛美嘉演唱会—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥770.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            01.06 周日 19:30
                        </div>
                        <div className="venue">
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    </div>
</div>
);
  }
}

export default Concert;
