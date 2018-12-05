import React, { Component } from 'react';
import "animate.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
class Basic extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		console.log(this.props.history)
        this.state = {
            films: [],
            isShowNav: false,
            ShowShare:false,
            showTu:false
        }
	}
       qingqiu(){
        console.log(789)
          React.axios.get('http://localhost:1234/goDetail',{params:{
                pinyinName:this.props.history
            }
        })
            .then((response) => {
                console.log(response.data.result);
                this.setState({
                        films:response.data.result.activity,     
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.qingqiu()
    }
    tanchu(){
      console.log(this.state.inShowNav)
        this.setState({
            isShowNav: !false,  
                })
        
    }
    yincang(){
        this.setState({
            isShowNav: false,  
                })
    }
    shareShow(){
      console.log(this.state.inShowNav)
        this.setState({
            ShowShare: !false,  
                })
        
    }
    shareNone(){
        this.setState({
            ShowShare: false,  
                })
    }
    tuShow(){
        this.setState({
            showTu: !false,  
                })
        
    }
    tuNone(){
        this.setState({
            showTu: false,  
                })
    }
    render() {
        return (

   <div id="activity" className="page">
   {/*头顶*/}
               <div className="page__header">
                <div className="left">
                    <i className="icon icon-angle-left">
                    </i>
                </div>
                <div className="middle">
                    <span>
                        演出详情
                    </span>
                </div>
                <div className="right">
                    <div className="share">
                        <i className="icon icon-dynshare" onClick={this.shareShow.bind(this)}>
                        </i>
                        <ReactCSSTransitionGroup
                          transitionEnter={true}
                          transitionLeave={true}
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={500}
                          transitionName="animated"
                        >
                        <div className="share__modal modal animated fadeIn" style={{"display":this.state.ShowShare?"block":"none"}} onClick={this.shareNone.bind(this)}>
                            <div className="modal__dialog animated fadeInUp " style={{"display":this.state.ShowShare?"block":"none"}}>
                                <div className="modal__title">
                                    分享
                                </div>
                                <div className="modal__content">
                                    <div className="item qq">
                                        <i className="icon icon-qq">
                                        </i>
                                        QQ好友
                                    </div>
                                    <div className="item qq-zone">
                                        <i className="icon icon-qq-zone">
                                        </i>
                                        QQ空间
                                    </div>
                                    <div className="item weibo">
                                        <i className="icon icon-weibo">
                                        </i>
                                        新浪微博
                                    </div>
                                </div>
                            </div>
                        </div>
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
{/*封面页*/}
        <div className="basic-info">
            <div className="bg" style={{"backgroundImage": `url(${this.state.films.thumbnail})`}}>
            </div>
            <div className="mask">
            </div>
            <div className="thumbnail">
                <img className="thumbnail__img" src={`${this.state.films.thumbnail}`} alt="avatar"/>
            </div>
            <div className="main">
                <h1 className="title">
                    {this.state.films.actName}
                </h1>
                <div className="date">
                    {this.state.films.actDate}
                </div>
                <div className="heat">
                    <div className="heat__main">
                        {this.state.films.hotLevel}℃
                        <br/>
                            <span>
                                西十区指数
                            </span>
                        <br/>
                    </div>
                </div>
                <div className="price">
                    {this.state.films.minPrice}
                    <span className="sub">
                        起
                    </span>
                </div>
            </div>
        </div>
{/*地址*/}
    <div className="activity-info">
        <div className="info-item address">
            <span className="text-content">
                <i className="icon icon-marker">
                </i>
                {this.state.films.veName}
            </span>
        </div>

                <div className="booking">
            <div className="booking__content info-item" onClick={this.tanchu.bind(this)}>
                <span className="text-content">
                    <span className="orange">
                        预订
                    </span>
                    预订演出票的相关说明
                </span>
                <span className="icon icon-angle-right" >
                </span>
            </div>
          
 
        <ReactCSSTransitionGroup
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName="animated"
        >

            <div className="booking__modal modal animated fadeIn" style={{"display":this.state.isShowNav?"block":"none"}} key="amache" onClick={this.yincang.bind(this)}>
                <div className="modal__dialog animated fadeInUp " style={{"display":this.state.isShowNav?"block":"none"}} key="amache">
                    <div className="modal__title">
                        预订票提示
                    </div>
                    <div className="modal__content">
                        <ol className="list">
                            <li>
                                当前本演出的全部或部分场次、票档为预订状态， 即主办方暂未开始开票;
                            </li>
                            <li>
                                该演出具体开票日期将由主办方、演出场馆及相关卖家确定;
                            </li>
                            <li>
                                演出票是稀缺资源，订票完成后不能取消。若您因个人原因无法观演，您可在西十区卖票平台上挂牌售卖;
                            </li>
                            <li>
                                正式开票后，西十区将督促平台上的票源方尽快为用户配票（根据用户付款的先后顺序）;
                            </li>
                            <li>
                                如根据先后顺序配票后您未能获得演出票，您可以发布求票信息;
                            </li>
                            <li>
                                客服电话：400-003-9992。服务时间：9:00-22:00。
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            </ReactCSSTransitionGroup>
        </div>
    </div>
    {/*图标保证*/}
    <div className="protection">
    <div className="protection__content" onClick={this.tuShow.bind(this)}>
        <div className="protection__icons">
            <span className="icon-display icon-secured">
                担保交易
            </span>
            <span className="icon-display icon-guaranteed">
                保证金制度
            </span>
            <span className="icon-display icon-accompany">
                先行赔付
            </span>
            <span className="icon-display icon-seller">
                1家竞价
            </span>
        </div>
        <span className="icon icon-angle-right">
        </span>
    </div>
    <ReactCSSTransitionGroup
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName="animated"
        >
    <div className="protection__modal modal animated fadeIn" style={{"display":this.state.showTu?"block":"none"}} key="amache" onClick={this.tuNone.bind(this)}>
        <div className="modal__dialog animated fadeInUp" style={{"display":this.state.showTu?"block":"none"}} key="amache" >
            <div className="modal__title">
                购票保障
            </div>
            <div className="modal__content">
                <ul className="list">
                    <li className="item icon-secured">
                        <h6>
                            担保交易
                        </h6>
                        <div>
                            由西十区提供交易担保，演出结束后无争议才打款给卖家;
                        </div>
                    </li>
                    <li className="item icon-guaranteed">
                        <h6>
                            保证金制度
                        </h6>
                        <div>
                            卖家已缴纳保证金，用于担保此次交易;
                        </div>
                    </li>
                    <li className="item icon-accompany">
                        <h6>
                            先行赔付
                        </h6>
                        <div>
                            卖家无票、假票、票面不符等一旦违约先行赔付;
                        </div>
                    </li>
                    <li className="item icon-seller">
                        <h6>
                            1家竞价
                        </h6>
                        <div>
                            1卖家共同在线比价购买;
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</ReactCSSTransitionGroup>
</div>
{/*演唱介绍*/}
<div className="block-wrapper">
    <div className="block">
        <h3 className="block__title">
            演出介绍
        </h3>
        <div className="block__content intro">
            <div className="series swiper-container">
                <div className="swiper-wrapper" style={{width: "92px"}}>
                    <div className="item swiper-slide active">
                        广州
                    </div>
                </div>
            </div>
            <div className="collapsed">
                <div className="intro__content">
                    <div>
                        <p style={{"textAlign": "center"}}>
                        </p>
                        <p style={{"textIndent":"2em"}}>
                            <strong>
                                新生代人气男歌手
                            </strong>
                        </p>
                        <p style={{"textIndent":"2em"}}>
                            身兼创作歌手及演员两职的周柏豪于2007年加入乐坛，曾推出多张畅销的专辑，其代表作有首支出道歌曲《同天空》、第二首单曲《六天》、以及与香港女歌手郑融合唱的《一事无成》。他更曾获得香港叱咤乐坛颁奖典礼的男歌手及唱作人金奖，无论是唱功还是创作能力都备受肯定，是香港新生代歌手的代表之一。近期，周柏豪更在影视圈全面发展，他参与主演的《使徒行者2》于全网热播，拥有超过20亿的播放量，使他的人气更上一层楼。
                        </p>
                        <p style={{"textIndent":"2em"}}>
                            <strong>
                                分享十年成果
                            </strong>
                        </p>
                        <p style={{"textIndent":"2em"}}>
                            于2007年正式出道的周柏豪，在今年正好迎来出道10周年的纪念。为了能够回顾自己过去十年的音乐旅程，同时感谢一直以来支持他的歌迷，他在今年开始开启了《One Step Closer Pakho Live》巡演。之前已经举行了的香港、广州、澳门站等，每场都是一票难求，全场爆满。2018年9月15日，周柏豪将在国家会展中心（上海）虹馆EH举行的《One Step Closer Pakho Live 2018-上海站》，届时他将会和歌迷一起重温出道以来的多首大热作品，分享他出道十年的成果。
                        </p>
                        <p style={{"textIndent":"2em"}}>
                            周柏豪希望借着这次演唱会带出一直以来保持的信念，与歌迷真诚分享其努力的成果。此次《One Step Closer Pakho Live》不仅回顾了柏豪出道十年的历程，以及见证其音乐及人生的成长，也是一次感谢祭，借此感谢他的歌迷、他的音乐团队以及重要的家人。歌迷可在欣赏柏豪表演多首感动歌曲的同时，与他一起分享满满的回忆。
                        </p>
                        <p style={{"textIndent":"2em"}}>
                            <br/>
                        </p>
                    </div>
                    <div className="gallery-wrapper">
                        <div className="gallery swiper-container">
                            <div className="title">
                                「 演出图集 」
                            </div>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="http://image.xishiqu.cn/upload/activity/000/000/934//b/CDD57B6D-F7A7-FEBD-3B64-EF79D21B55AE.jpg"/>
                                </div>
                                <div className="swiper-slide">
                                    <img src="http://image6.xishiqu.cn/upload/activity/000/000/934//b/454A3556-1832-678F-D570-8F7656160E99.jpg"/>
                                </div>
                                <div className="swiper-slide">
                                    <img src="http://image3.xishiqu.cn/upload/activity/000/000/934//b/9E37F852-A73B-E371-E2E8-446FC70520F0.jpg"/>
                                </div>
                                <div className="swiper-slide">
                                    <img src="http://image5.xishiqu.cn/upload/activity/000/000/934//b/865DD4AE-1428-FBE9-1886-4CAA1C4696A2.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="full-screen swiper-container" style={{"display":"none"}}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img className="swiper-lazy" data-src="http://image.xishiqu.cn/upload/activity/000/000/934//o/CDD57B6D-F7A7-FEBD-3B64-EF79D21B55AE.jpg"/>
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                        </div>
                                    
                                </div>
                                <div className="swiper-slide">
                                    <img className="swiper-lazy" data-src="http://image6.xishiqu.cn/upload/activity/000/000/934//o/454A3556-1832-678F-D570-8F7656160E99.jpg"/>
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                        </div>
                                    
                                </div>
                                <div className="swiper-slide">
                                    <img className="swiper-lazy" data-src="http://image3.xishiqu.cn/upload/activity/000/000/934//o/9E37F852-A73B-E371-E2E8-446FC70520F0.jpg"/>
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                        </div>
                                    
                                </div>
                                <div className="swiper-slide">
                                    <img className="swiper-lazy" data-src="http://image5.xishiqu.cn/upload/activity/000/000/934//o/865DD4AE-1428-FBE9-1886-4CAA1C4696A2.jpg"/>
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro__toggle">
                    展开更多
                </div>
            </div>
        </div>
    </div>
    <div className="block">
        <h3 className="block__title">
            购票须知
        </h3>
        <div className="block__content remark">
            1、1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场（如演出介绍内有不同身高规定，以演出介绍内身高说明为准）。
            <br/>
                2、演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务。
            <br/>
        </div>
    </div>
    <div className="block">
        <h3 className="block__title">
            用户答疑
            <div className="more">
                我要提问
                <span className="icon icon-angle-right">
                </span>
            </div>
        </h3>
        <div className="block__content qa">
        </div>
    </div>
    <div className="block">
        <h3 className="block__title">
            互动评论(0)
            <div className="btn">
                写评论
            </div>
        </h3>
        <div className="block__content comments">
            
        </div>
    </div>
</div>
</div>
        );
    }
}

export default Basic;