import React, { Component } from 'react';
class List extends Component {
	constructor(props){
		super(props);
		this.props=props;
		this.state={
			showList:[],
            idx:0
		}
	}
	// getData(idx){
 //        console.log(idx);
	// 	React.axios.get('http://localhost:1234/getIndexDate',{
	// 		params:{
	// 			cityCode:'020'
	// 		}
	// 	})
	// 	.then((res)=>{
	// 		console.log(res);
	// 		let totalday = res.data.result.activitySevenInfo;
	// 		this.setState({
	// 			showList:totalday[idx].list
	// 		})
	// 		console.log(this.state.showList);

	// 	})
	// 	.catch((err)=>{
	// 		console.log(err)
	// 	})
	// }
	componentDidMount(){
         let storage= window.localStorage;
            let obj =JSON.parse(localStorage.getItem("list"));
            console.log(obj)
        if(this.props.location.state){
            console.log(this.props.location.state.name)
            this.setState({
                    showList:this.props.location.state.name
                })
        }else{
            let storage= window.localStorage;
            let obj =JSON.parse(localStorage.getItem("list"));
            console.log(obj)
            this.setState({
                    showList:obj.listData
                })
        }
        
        //this.getData(this.state.idx);
        //console.log(this.state.idx)
	}
    // componentWillReceivePorps(){
    //     this.setState({
    //         idx:this.props.match.params.idx
    //     })
    //     // console.log(this.state.idx)
    //     this.getData(this.state.idx);
    // }
  render() {
    return (
<div className="List">
    <div className="block-wrapper">
        
        <div className="node-list">
            <div className="wrapper" style={{width: '134.4rem'}}>
                {
                	(()=>{
                		return this.state.showList.map((item,idx)=>{
                			return (
                				<div key={idx} className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: `url(${item.actImgUrl})`}}>
                        
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
                            {item.veName}
                        </div>
                    </div>
                    
                </div>
                				)
                		})
                	})()
                }
                {/*<div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image.xishiqu.cn/upload/activity/118/040/20180409059/v/b/3A1997C7-D664-9DF6-A546-378D0F7D25FF.jpg")'}}>
                        <div className="thumbnail__tag">
                            <span>
                                7.0
                            </span>
                            折 起
                        </div>
                        <div className="thumbnail__hot">
                            <span>
                                84.8
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            代入式情景烧脑悬疑剧本《老宅疑案》—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥112.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-04-11-2018-12-31
                        </div>
                        <div className="venue">
                            A&F水弹枪俱乐部（火车站店）
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image3.xishiqu.cn/upload/activity/118/111/20181119005/v/b/42972A24-7600-887C-4A46-1A804CCB79DF.jpg")'}}>
                        
                        <div className="thumbnail__hot">
                            <span>
                                88.6
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            开心麻花爆笑舞台剧《牢友记》—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥226.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-12-04-2018-12-09
                        </div>
                        <div className="venue">
                            虹桥艺术中心（原天山电影院）
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image.xishiqu.cn/upload/activity/118/091/20180914003/v/b/8775793B-D922-2BD4-CAD7-8056626FB9E7.jpg")'}}>
                        
                        <div className="thumbnail__hot">
                            <span>
                                83.0
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            原创主题展：滤镜时代—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥78.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-09-21-2019-01-02
                        </div>
                        <div className="venue">
                            正大广场4F
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image.xishiqu.cn/upload/activity/118/082/20180827015/v/b/7008CDEA-5D41-4C5F-246F-07598145785B.jpg")'}}>
                        
                        <div className="thumbnail__hot">
                            <span>
                                97.5
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            孟京辉戏剧作品《一个陌生女人的来信》—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥226.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-12-05-2018-12-09
                        </div>
                        <div className="venue">
                            艺海剧院
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image4.xishiqu.cn/upload/activity/118/112/20181126002/v/b/701051E8-DC6C-2393-38FB-13D514068313.jpg")'}}>
                        <div className="thumbnail__tag">
                            <span>
                                7.3
                            </span>
                            折 起
                        </div>
                        <div className="thumbnail__hot">
                            <span>
                                85.5
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            百老汇音乐剧《近乎正常》中文版—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥230.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-12-05-2018-12-16
                        </div>
                        <div className="venue">
                            上海人民大舞台
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image6.xishiqu.cn/upload/activity/118/041/20180419056/v/b/C3BA259F-C479-2F8D-701C-3CADD2A3A6DD.jpg")'}}>
                        
                        <div className="thumbnail__hot">
                            <span>
                                83.0
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            懒虎门票精彩长三角版联票册（江浙沪景区）—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥299.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-04-20-2018-12-31
                        </div>
                        <div className="venue">
                            上海市区
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image.xishiqu.cn/upload/activity/117/112/20171128045/v/b/7743C34B-02EE-39EA-CAF9-7B4A46097C35.jpg")'}}>
                        
                        <div className="thumbnail__hot">
                            <span>
                                94.0
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            精彩上海2018懒虎亲子版联票（乐园场馆+上海景区）—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥299.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2017-12-01-2018-12-31
                        </div>
                        <div className="venue">
                            上海市区
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image5.xishiqu.cn/upload/activity/118/041/20180411038/v/b/1E7B0228-9C40-6DCE-0F2F-7C14773EFF45.jpg")'}}>
                        <div className="thumbnail__tag">
                            <span>
                                8.3
                            </span>
                            折 起
                        </div>
                        <div className="thumbnail__hot">
                            <span>
                                82.7
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            AF俱乐部菜鸟训练营—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥65.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-04-12-2018-12-31
                        </div>
                        <div className="venue">
                            A&F水弹枪俱乐部（火车站店）
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image4.xishiqu.cn/upload/activity/118/041/20180412057/v/b/2CF4540B-A4AF-1AAF-0D37-3E828CEB1827.jpg")'}}>
                        <div className="thumbnail__tag">
                            <span>
                                7.0
                            </span>
                            折 起
                        </div>
                        <div className="thumbnail__hot">
                            <span>
                                83.1
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            代入式情景烧脑悬疑剧本《为爱痴狂》—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥112.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-04-13-2018-12-31
                        </div>
                        <div className="venue">
                            A&F水弹枪俱乐部（火车站店）
                        </div>
                    </div>
                    
                </div>
                <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image3.xishiqu.cn/upload/activity/117/041/20170414013/v/b/824625C8-57BB-B8C2-AE8E-EC053151FBCB.jpg")'}}>
                        
                        <div className="thumbnail__hot">
                            <span>
                                78.0
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            2017—2018年上海亲子游览年票—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥198.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-01-01-2018-12-31
                        </div>
                        <div className="venue">
                            上海市区
                        </div>
                    </div>
                    
                </div>*/}
 {/*               <div className="node node--activity vertical">
                    
                    
                    <div className="thumbnail" style={{backgroundImage: 'url("http://image4.xishiqu.cn/upload/activity/118/061/20180613051/v/b/EA0CB4D8-7652-8590-B59D-72846F83DA51.jpg")'}}>
                        
                        <div className="thumbnail__hot">
                            <span>
                                83.1
                            </span>
                            ℃
                        </div>
                    </div>
                    
                    <div className="main">
                        <h1 className="title">
                            推理剧《追凶回忆事件薄 侦探们的镇魂曲》—上海站
                        </h1>
                        <div className="price">
                            <div>
                                <span>
                                    ￥299.00
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            2018-12-01-2018-12-31
                        </div>
                        <div className="venue">
                            汇嘉大厦
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

export default List;
