import React, { Component } from 'react';
import ListHeader from './listHeader.jsx'
import Box from './Box.jsx'
import Calendar from './Calendar.jsx'


class List extends Component {
  constructor(props){
    super(props);
    this.props=props;
  }
  render() {
    return (
          <div id="wrapper-category">
        <div className="page" id="category">
      <div className="List">
      <ListHeader history={this.props.history}></ListHeader>
      	<Box></Box>
        <Calendar></Calendar>
      </div>
      </div>
      </div>
    );
  }
}

export default List;
