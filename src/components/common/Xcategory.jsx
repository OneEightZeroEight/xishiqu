import React, { Component } from 'react';

class Xcategory extends Component {
  render() {
    return (
	    <div className="categories">
	      	<div className="wrapper">
	      		<div className="item active">
	      			<span className="cate-icon all"></span>
	                    全部
	            </div>
	            <div className="item">
	            	<span className="cate-icon yanchanghui"></span>
	                    演唱会
	            </div>
	            <div className="item">
	            	<span className="cate-icon huajugeju"></span>
	                    话剧歌剧
	            </div>
	            <div className="item">
	            	<span className="cate-icon xiuxianyule"></span>
	                    休闲娱乐
	            </div>
	            <div className="item">
	            	<span className="cate-icon film"></span>
	                    电影
	            </div>
	            <div className="item">
		            <span className="cate-icon tiyusaishi"></span>
	                    体育赛事
	            </div>
	            <div className="item">
		            <span className="cate-icon ertongqinzi"></span>
	                    儿童亲子
	            </div>
	            <div className="item">
	            	<span className="cate-icon yinyuehui"></span>
	                    音乐会
	            </div>
	            <div className="item">
		            <span className="cate-icon quyizaji"></span>
	                    曲艺杂技
	            </div>
	            <div className="item">
		            <span className="cate-icon wudaobalei"></span>
	                    舞蹈芭蕾
	            </div>
	        </div>
	    </div>
    )
  }
}

export default Xcategory;

