import React, { Component } from 'react';

import { Route } from "react-router-dom";

// import ListHeader from './listHeader.jsx';
import '../../../styles/my.css';

import Login from './Login/Login.jsx';
import User from './User/User.jsx';

class My extends Component {
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            loading: true
        }
    }

    //获取cookie
    getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        // console.log("获取cookie,现在循环");
        for (var i = 0; i < ca.length; i++){
            var c = ca[i];
            // console.log(c);
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name) !== -1){
                // console.log(c.substring(name.length, c.length));
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    componentDidMount(){
        var userEmail = this.getCookie('userEmail');
        setTimeout(()=>{
            this.setState({loading:false},()=>{
                if(userEmail === ''){
                    this.props.history.push({pathname:'/my/login'})
                }else{
                    this.props.history.push({pathname:'/my/user'})
                }
            })
        },2000)
    }


    render() {
        return (
            <div>
                {
                    (()=>{
                        if(this.state.loading){
                            return (
                                <div id="progress-box" className="pre-loader">
                                    <div className="inner">
                                        <div className="la-ball-grid-pulse la-2x">
                                            <div></div><div></div><div></div>
                                            <div></div><div></div><div></div>
                                            <div></div><div></div><div></div>
                                        </div>
                                        <p>正在努力加载中</p>
                                    </div>
                                </div>
                            )
                        }
                    })()
                }
                <Route path="/my/login" component={Login} />
                <Route path="/my/user" component={User} />
            </div>
        );
    }
}

export default My;
