import React, { Component } from 'react';

// import ListHeader from './listHeader.jsx';
import '../../../../styles/my.css';

class User extends Component {
    constructor(props){
        super(props);
        this.props=props;
        this.state={
          
        }
    }

    backHome(e){
        this.props.history.push({pathname: '/'});
    }


    render() {
        return (
        <div id="dashboard">
            <div className="wrapper wrap-content">
                    {/*<div id="progress-box" className="pre-loader">
                        <div className="inner">
                            <div className="la-ball-grid-pulse la-2x">
                                <div></div><div></div><div></div>
                                <div></div><div></div><div></div>
                                <div></div><div></div><div></div>
                            </div>
                            <p>点击页面可重新加载</p>
                        </div>
                    </div>*/}

                    <div className="jumbotron">
                        <header className="header transparent">
                            <span className="left">
                                <i className="icon-angle-left icon" onClick={this.backHome.bind(this)} ></i>
                            </span>
                            <span className="middle"></span>
                            <div className="right">
                                <a href="http://m.xishiqu.com/member/letter">
                                    <span className="icon-bell-o icon"></span>
                                </a>
                            </div>
                        </header>
                        <div className="member">
                            <img src="http://m.xishiqu.com/m/images/default-avatar.png" alt="avatar" />
                            <span className="nick-name" style={{overflow: 'auto', width: 'auto'}}>15820302224</span>
                        </div>
                    </div>

                    <div className="list-group with-icon">
                        <a className="list-group-item my-order" href="http://m.xishiqu.com/member/order">
                            <span className="icon icon-list"></span>
                            <span className="list-title">演出订单
                                        </span>
                        </a>
                        <a className="list-group-item my-film" href="/films/my-film">
                            <span className="icon icon-list"></span>
                            <span className="list-title">电影订单</span>
                        </a>
                        <a className="list-group-item my-card" href="http://m.xishiqu.com/member/discount">
                            <span className="icon icon-credit-card"></span>
                            <span className="list-title">我的卡券</span>
                        </a>
                            <a className="list-group-item my-wallet" href="http://m.xishiqu.com/member/wallet">
                            <span className="icon icon-suitcase"></span>
                            <span className="list-title">我的钱包</span>
                        </a>
                    </div>

                    <div className="list-group with-icon">
                        <a className="list-group-item my-favorite" href="http://m.xishiqu.com/member/favorite">
                            <span className="icon icon-heart-o"></span>
                            <span className="list-title">我的收藏</span>
                        </a>
                        <a className="list-group-item my-address" href="http://m.xishiqu.com/member/address">
                            <span className="icon icon-address"></span>
                            <span className="list-title">收货地址</span>
                        </a>
                            <a className="list-group-item my-password" href="http://m.xishiqu.com/member/password/change">
                            <span className="icon icon-user"></span>
                            <span className="list-title">修改密码</span>
                        </a>
                            <a className="list-group-item my-service" href="tel:400-003-9992">
                            <span className="icon icon-service"></span>
                            <span className="list-last">客服电话 ：400-003-9992</span>
                        </a>
                    </div>


                <div className="logout">
                    <a className="btn btn-primary btn-block" href="http://m.xishiqu.com/logout">退出登录</a>
                </div>
            </div>
        </div>
        );
    }
}

export default User;
