import React, { Component } from 'react';
import { Anchor } from 'antd';
const { a } = Anchor;
class Anchorl extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props)
        this.state = {
            sortData:[{
                title:'演出介绍',
                order:1
            },{
                title:'购票须知',
                order:2
            },{
                title:'互动评论',
                order:3
            },{
                title:'相关演出',
                order:4
            }],
            kw:true
        }
        console.log(this.state.kw)
    }
scrollToAnchor (id){

document.getElementById(id).scrollIntoView();
}

componentWillReceiveProps(nextProps){
        console.log(this.props,nextProps);
       this.getnextProps(nextProps)
      
    }
    getnextProps(kw){
        console.log(kw)
    this.setState({
                        kw: kw
                    },()=>{
                        console.log(123)
                })
    console.log(this.state)
    console.log(this.state.kw.history)
    }
// componentDidMount(){
//      // window.scrollTo(0,5);

//         // this.getSearchData(this.props.cityCode);

//     }
    render(){
        return(

              
                            <div className="navigation" style={{display:this.props.history.codeType?"none":""}}>
                   
                             {
            (()=>{
                if(!this.props.history.codeType){
                    return (

                        <div className={this.state.kw.history.xiao?"item active":"item"}>
                        <a onClick={()=>this.scrollToAnchor('yanchu')} href="javascript:;" style={{color:"#000",textDecoration:"none"}}>
                            <span className="i">
                                演出介绍
                            </span>
                            </a>
                        </div>
                        )
                }
            })()
           }
                        
                        <div className="item">
                        <a onClick={()=>this.scrollToAnchor('goupiao')} href="javascript:;" style={{color:"#000",textDecoration:"none"}}>
                            <span className="i">
                                购票须知
                            </span>
                            </a>
                        </div>
                        <div className="item">
                        <a onClick={()=>this.scrollToAnchor('hudong')} href="javascript:;" style={{color:"#000",textDecoration:"none"}}>
                            <span className="i">
                                互动评论
                            </span>
                            </a>
                        </div>
                        {
                            (()=>{
                                if(!this.props.history.codeType){
                                    return (
                                         <div className={this.state.kw.history.xiao?"item":"item  active"}>
                                        <a onClick={()=>this.scrollToAnchor('xiangguan')} href="javascript:;" style={{color:"#000",textDecoration:"none"}}>
                                            <span className="i">
                                                相关演出
                                            </span>
                                            </a>
                                        </div>
                                        )
                                }
                            })()
                           }
                       
                
                    </div>
                           
                    
                 
            ) 
    }
}
    
    


export default Anchorl;