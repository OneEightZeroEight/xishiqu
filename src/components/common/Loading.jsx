import React, { Component } from 'react';


// import ListHeader from './listHeader.jsx';
import '../../styles/loading.css';

class Loading extends Component {
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            loading: true,
            defaultText: '努力加载中'
        }
    }

    componentDidMount(){
        // console.log(this.props);
    }


    render() {
        return (
            <div>
                {
                    (()=>{
                        var content ='';
                        if(JSON.stringify(this.props)!=='{}'){
                            content = this.props.tip;
                        }else {
                            content = this.state.defaultText;
                        }
                        
                        return (
                            <div className="pre-loader">
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

export default Loading;
