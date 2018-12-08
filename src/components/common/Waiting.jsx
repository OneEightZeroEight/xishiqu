import React, { Component } from 'react';


// import ListHeader from './listHeader.jsx';
import '../../styles/my.css';

class Waiting extends Component {
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            loading: true,
            defaultText: '正在努力跳转中'
        }
    }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.props.history.push({pathname:'/'})
    //     },2000)
    // }


    render() {
        return (
            <div>
                {
                    (()=>{
                        var content ='';
                        if(this.props.location.query){
                            content = this.props.location.query.text;
                        }else {
                            content = this.state.defaultText;
                        }
                        
                        return (
                            <div id="progress-box" className="pre-loader">
                                <div className="inner">
                                    <div className="la-ball-grid-pulse la-2x">
                                        <div></div><div></div><div></div>
                                        <div></div><div></div><div></div>
                                        <div></div><div></div><div></div>
                                    </div>
                                    <p>{content}</p>
                                </div>
                            </div>
                        )
                    })()
                }
            </div>
        );
    }
}

export default Waiting;
