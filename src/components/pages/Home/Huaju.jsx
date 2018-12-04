import React, { Component } from 'react';
class Huaju extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			cards: [],
			jibai:[],
			cards2:[],
			jibai2:[],
			film:[],
			Like:[]
		}
	}
	componentDidMount() {
		console.log(789)
		React.axios.get('http://localhost:1234/getIndexData',{params:{
			cityCode:'020'
		}
	})
			.then((response) => {
				console.log(response.data.result.activityLikeInfo);
				let srt = response.data.result.activityCateInfo[1].mData
				let obj = srt.shift();
				// console.log(obj)
				// console.log(srt)
				let haha = response.data.result.activityCateInfo[2].mData
				let obj2 = haha.shift();
				// console.log(obj2)
				// console.log(haha)
				this.setState({
						cards:obj,
						cards2:obj2,
						jibai:srt,
						jibai2:haha,
						film:response.data.result.activityCateInfo[3].mData,
						Like:response.data.result.activityLikeInfo
				})
		
			})
			.catch(function (error) {
				console.log(error);
			});
	}
  render() {
    return (
    	
			<div className="block-wrapper">
					{/*话剧*/}

				<div  className="block" >
			        <h3 className="block__title">
			            话剧歌剧
			            <small>
			                查看更多
			            </small>
			        </h3>
			        <div className="main-node">
			            <div className="node node--activity primary">
			                <div className="bg" style={{"backgroundImage": `url(${this.state.cards.actImgUrl})`}}>
			                </div>
			                <div className="mask">
			                </div>
			                <div className="thumbnail" style={{"backgroundImage": `url(${this.state.cards.actImgUrl})`}}>
			                    <div className="thumbnail__hot">
			                        <span>
			                            {this.state.cards.hotLevel}
			                        </span>
			                        ℃
			                    </div>
			                </div>
			                <div className="main">
			                    <h1 className="title">
			                        {this.state.cards.actName}
			                    </h1>
			                    <div className="quote">
			                        {this.state.cards.intro}
			                    </div>
			                    <div className="date">
			                        {this.state.cards.actTime}
			                    </div>
			                    <div className="price">
			                        <div>
			                            <span>
			                                ￥{this.state.cards.lowPrice}
			                            </span>
			                            <span className="sub">
			                                起
			                            </span>
			                        </div>
			                        <div>
			                            在售卖家{this.state.cards.sellerCount}家
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			          
			        <div className="node-list">

			            <div  className="wrapper" style={{width: '135rem'}}>
			            	{
					(() => {
						return this.state.jibai.map((item, index) => {
							return (

			                <div   key={index} className="node node--activity vertical">
			                    <div  className="thumbnail" style={{"backgroundImage": `url(${item.actImgUrl})`,width: '10rem'}}>
			                        <div className="thumbnail__hot">
			                            <span>
			                             	{item.hotLevel}
			                            </span>
			                            ℃
			                        </div>
			                    </div>
			                    <div className="main">
			                        <h1 className="title">
			                            {item.actName}
			                        </h1>
			                        <div className="price">
			                            <div>
			                                <span>
			                                    ￥{item.lowPrice}
			                                </span>
			                                <span className="sub">
			                                    起
			                                </span>
			                            </div>
			                        </div>
			                        <div className="date">
			                            {item.actTime}
			                        </div>
			                        <div className="venue">
			                        </div>
			                    </div>
			                </div>
					                
								)
								})
							})()
						}
			            </div>        
			        </div>       
			    </div>

		{/*休闲娱乐*/}
	<div className="block">
    <h3 className="block__title">
        休闲娱乐
        <small>
            查看更多
        </small>
    </h3>
    <div className="main-node">
        <div className="node node--activity primary">
            <div className="bg" style={{"backgroundImage": `url(${this.state.cards2.actImgUrl})`}}>
            </div>
            <div className="mask">
            </div>
            <div className="thumbnail" style={{"backgroundImage": `url(${this.state.cards2.actImgUrl})`}}>
                
                <div className="thumbnail__hot">
                    <span>
                        {this.state.cards2.hotLevel}
                    </span>
                    ℃
                </div>
            </div>
            
            
            <div className="main">
                <h1 className="title">
                    {this.state.cards2.actName}
                </h1>
                <div className="quote">
                    {this.state.cards2.intro}
                </div>
                <div className="date">
                    {this.state.cards2.actTime}
                </div>
                <div className="price">
                    <div>
                        <span>
                            ￥{this.state.cards2.lowPrice}
                        </span>
                        <span className="sub">
                            起
                        </span>
                    </div>
                    <div>
                        在售卖家{this.state.cards2.sellerCount}家
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="node-list">

			            <div  className="wrapper" style={{width: '110rem'}}>
			            	{
					(() => {
						return this.state.jibai2.map((item, index) => {
							return (
			                <div   key={index} className="node node--activity vertical">
			                    <div  className="thumbnail" style={{"backgroundImage": `url(${item.actImgUrl})`,width: '10rem'}}>
			                        <div className="thumbnail__hot">
			                            <span>
			                             	{item.hotLevel}
			                            </span>
			                            ℃
			                        </div>
			                    </div>
			                    <div className="main">
			                        <h1 className="title">
			                            {item.actName}
			                        </h1>
			                        <div className="price">
			                            <div>
			                                <span>
			                                    ￥{item.lowPrice}
			                                </span>
			                                <span className="sub">
			                                    起
			                                </span>
			                            </div>
			                        </div>
			                        <div className="date">
			                            {item.actTime}
			                        </div>
			                        <div className="venue">
			                        </div>
			                    </div>
			                </div>
					                
								)
								})
							})()
						}
			            </div>        
			        </div>
	</div>

	{/*电影*/}
<div className="block">
    <h3 className="block__title">
        电影
        <small>
            查看更多
        </small>
    </h3>
    <div className="node-list">
        <div className="wrapper" style={{width: '134rem'}}>
        {
			(() => {
				return this.state.film.map((item, index) => {
					return (						
            <div className="node node--film vertical"  key={index}>
                <div className="thumbnail" style={{"backgroundImage": `url(${item.filmImg})`,width: '10rem'}}>
                    <div className="thumbnail__score">
                        {item.scoreD}
                    </div>
                </div>
                
                <div className="main">
                    <h1 className="title">
                        {item.filmName}
                    </h1>
                </div>
            </div> 
           )
					})
				})()
			}   
        </div>
    </div>
</div>
{/*猜你所喜*/}
	<div className="block favours">
	    <h3 className="block__title">
	        投你所喜
	    </h3>
	    {
			(() => {
				return this.state.Like.map((item, index) => {
					return (	
	    <div className="node node--activity horizontal" key={index}>       
	        <div  className="thumbnail" style={{"backgroundImage": `url(${item.actImgUrl})`}}></div>
	        <div className="main">
	            <h1 className="title">
	                {item.actName}
	            </h1>
	            <div className="date">
	                {item.actTime}
	            </div>
	            <div className="venue">
	                {item.veName}
	            </div>
	            <div className="tags">      
	            </div>
	            <div className="price">
	                <div>
	                    <span>
	                        ￥{item.lowPrice}
	                    </span>
	                    <span className="sub">
	                        起
	                    </span>
	                </div>
	                
	            </div>
	            <div className="quote">
	                {item.intro}
	            </div>
	        </div>  
	             
	    </div>
	    )
			})
		})()
	}
	</div>
</div>

		);
  	}
}

export default Huaju;
