import React, { Component } from 'react';
import ListHeader from './listHeader.jsx'
import Box from './Box.jsx'

class List extends Component {
  constructor(props){
    super(props);
    this.props=props;
  }
  render() {
    return (
      <div className="List">
      <ListHeader></ListHeader>
      	<Box></Box>
      </div>
    );
  }
}

export default List;
