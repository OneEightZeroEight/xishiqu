import React, { Component } from 'react';


class listHeader extends Component {
  constructor(props){
    super(props);
    this.props=props;
  }
  render() {
    return (
<div className="listHeader">
    <div id="wrapper-category">
        <div className="page" id="category">
            <div className="page__header">
                <div className="left">
                    <i className="icon icon-angle-left">
                    </i>
                    <div>
                        上海
                        <i className="icon icon-angle-down">
                        </i>
                    </div>
                </div>
                <div className="middle">
                    <div className="search">
                        <i className="icon icon-search">
                        </i>
                        <input placeholder="搜索明星、演出、场馆" type="text"/>
                    </div>
                </div>
                <div className="right">
                    <div className="sorts">
                        <i className="btn btn-sort">
                        </i>
                        <div className="sorts__modal modal" style={{display: "none"}}>
                            <div className="modal__dialog">
                                <div className="item active">
                                    默认
                                </div>
                                <div className="item">
                                    按价格
                                </div>
                                <div className="item">
                                    按日期
                                </div>
                            </div>
                        </div>
                    </div>
                    <i className="btn-date">
                    </i>
                </div>
            </div>
        </div>
    </div>
</div>
);
  }
}

export default listHeader;
