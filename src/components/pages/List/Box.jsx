import React, { Component } from 'react';
import { connect } from 'react-redux';

class Box extends Component {
	constructor(props){
        super(props);
        this.props = props;
    }
	render() {
		return (
			<div id="category">
				<div className="sorts__modal modal" style={{display:'none'}} ><div className="modal__dialog"><div className="item active">
                默认
            </div><div className="item">
                按价格
            </div><div className="item">
                按日期
            </div></div></div>
			</div>
		);
	}

}

export default connect((state)=>{
    return state
},(dispatch=>{
    return {
    toggleBox(){
      dispatch({
        type:"toggleBox",
      })
    }
  }
}))(Box);
