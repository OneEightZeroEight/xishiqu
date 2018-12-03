import React, { Component } from 'react';

class Xheader extends Component {
  render() {
    return (
      <div className="page__header">
	   <div className="left"> 
	    <div>
	      成都 
	     <i className="icon icon-angle-down" aria-hidden="true"></i>
	    </div> 
	   </div> 
	   <div className="middle">
	    <div className="search">
	     <i className="icon icon-search"></i> 
	     <input type="text" placeholder="搜索明星、演出、场馆" />
	    </div>
	   </div> 
	   <div className="right">
	    <div className="icon icon-gift active">
	     <div className="task-list" style={{display: "none"}}>
	      <div className="item active">
	       <span className="text">首次消费返现</span>
	      </div>
	     </div>
	    </div>
	   </div>
	  </div>
    )
  }
}

export default Xheader;


