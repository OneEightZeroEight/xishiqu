import React, { Component } from 'react';
import Basic from './Basic.jsx'
class Detail extends Component {
	constructor(props) {
		super(props);
		this.props = props;
        console.log(props)
	}
    render() {
        return (
            <div id="wrapper-activity">
                <div className="page-group">

                        <p>{this.props.location.state.name}</p>
                        <Basic history={this.props.location.state.name}></Basic>
                    
                </div>
            </div>
        );
    }
}

export default Detail;