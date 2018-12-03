import React, { Component } from 'react';

class Xfooter extends Component {
  render() {
    return (
      <div className="bottom-toolbar">
	   <div className="item active">
	    <span className="i home"></span> 
	    <span className="text">首页</span>
	   </div>
	   <div className="item">
	    <span className="i category"></span> 
	    <span className="text">分类</span>
	   </div>
	   <div className="item">
	    <span className="i article"></span> 
	    <span className="text">同趣</span>
	   </div>
	   <div className="item">
	    <span className="i ticket"></span> 
	    <span className="text">转票</span>
	   </div>
	   <div className="item">
	    <span className="i my"></span> 
	    <span className="text">我</span>
	   </div> 
	   <div>
	   </div>
	  </div>
    )
  }
}

export default Xfooter;


