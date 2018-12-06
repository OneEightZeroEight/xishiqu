import React, { Component } from 'react';
import ListHeader from './listHeader.jsx';
import Xcategory from '../../common/Xcategory.jsx';
import NodeList from './NodeList.jsx';
import Xfooter from '../../common/Xfooter.jsx';
import Box from './Box.jsx'

class List extends Component {
  constructor(props){
    super(props);
    this.props=props;
    this.state={
          nav: 1
        }
  }
  render() {
    return (
      <div id="wrapper-category">
        <div id="category" className="page">
          <ListHeader></ListHeader>
          <div>
            <Xcategory />
          </div>
          <NodeList />
        	<Box></Box>
        </div>
        <Xfooter history={this.props.history} nav={this.state.nav} />
      </div>
    );
  }
}

export default List;
