import React, { Component } from 'react';

import '../../../../styles/login.scss';

class Login extends Component {
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            useEmail: true,
            email:'',
            checkCode:''
        }
    }

    setCookie(cname, cvalue, exdays){
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        console.log(cname + "=" + cvalue + "; " + expires);
        document.cookie = cname + "=" + cvalue + "; " + expires;
        //console.log(document.cookie);
    }

    componentDidMount(){
        // console.log(this.props);
        
    }

    useEm(){
        this.setState({useEmail:true})
    }

    useAccount(){
        this.setState({useEmail:false})
    }

    receiveEmail(e){
        this.setState({email:e.target.value},()=>{
            // console.log(this.state.email);
        })
    }

    receiveCode(e){
        this.setState({checkCode:Number(e.target.value)},()=>{
            // console.log(this.state.checkCode);
            
        })
    }

    startLogin(e){
        console.log(this.state.email,this.state.checkCode);
        this.setCookie('userEmail',this.state.email,1);
        this.props.history.push({pathname:'/my/waiting',query:{text:'登录成功'}});
    }


    render() {
        return (
            <div id="wrapper-login">
                <div id="login" className="page">
                    <div className="login__header"></div>
                    <div className="page__tabs">
                        <ul>
                            <li className={this.state.useEmail?'tabs--activated':''}>
                                <span onClick={this.useEm.bind(this)}  name="shortcut">邮箱验证</span></li>
                            <li className={!this.state.useEmail?'tabs--activated':''}>
                                <span onClick={this.useAccount.bind(this)}  name="account">账号密码</span></li>
                        </ul>
                    </div>

                    <div className="page__tab-content">

                        {
                            (()=>{
                                if(this.state.useEmail){
                                    return (
                                        <div className="tab-content__shortcut">
                                            <div className="input__phone">
                                                <i className="icon icon-admin"></i>
                                                <input type="email" onChange={this.receiveEmail.bind(this)} pattern="\d*" name="phone" placeholder="请输入邮箱" className="form-control" /></div>
                                            <div className="input__veri-code">
                                                <i className="icon icon-protection"></i>
                                                <input onChange={this.receiveCode.bind(this)} type="number" pattern="\d*"  name="veri-code" placeholder="请输入验证码" className="form-control" />
                                                <button className="btn btn-default">获取验证码</button></div>
                                            <button disabled={(this.state.email!==''&&this.state.checkCode!=='')?'':'disabled'} 
                                                    className={(this.state.email!==''&&this.state.checkCode!=='')?'btn btn-default login-btn login-btn--activite':'btn btn-default login-btn'} 
                                                    onClick={this.startLogin.bind(this)}>登录</button>
                                        </div>
                                    )
                                }else{
                                    return (
                                        <div className="tab-content__account">
                                            <div className="input__account">
                                                <i className="icon icon-admin"></i>
                                                <input type="text" name="account" placeholder="请输入登录账号" className="form-control" />
                                            </div>
                                            <div className="input__password">
                                                <i className="icon icon-lock"></i>
                                                <input type="password" name="password" placeholder="请输入登录密码" className="form-control" />
                                                <button>
                                                    <i className="icon icon icon-eye-close"></i>
                                                </button>
                                            </div>
                                            <button disabled="disabled" className="btn btn-default login-btn">登录</button>
                                            <a href="http://localhost:3000/" className="forgot-pwd">找回密码</a>
                                            <a href="http://localhost:3000/" className="register">新用户注册</a>
                                        </div>
                                    )
                                }
                            })()
                        }
                        
                        
                        
                        <div className="other-methods">
                            <div className="other-methods__qq icon icon-qq">
                                <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101214754&amp;redirect_uri=http%3A%2F%2Fwww.xishiqu.com%2FthirdPartyLogin%2Fqq%2Fcallback.php&amp;state=5cd5c46278a38c543d3a4c90e572337c&amp;scope=get_user_info"></a>
                            </div>
                            <div className="other-methods__weibo icon icon-weibo">
                                <a href="https://api.weibo.com/oauth2/authorize?client_id=2689896212&amp;redirect_uri=http%3A%2F%2Fm.xishiqu.com%2FthirdPartyLogin%2Fweibo&amp;response_type=code"></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;
