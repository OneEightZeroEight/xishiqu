import React, { Component } from 'react';
import $ from "jquery";
import Swiper from 'swiper'
class Show extends Component {
	constructor(props){
		super(props);
		this.props=props;
		this.state={
			day:[],
			list:[],
			href:['/home/one/','/home/two/','/home/three/','/home/four/','/home/five/','/home/six/','/home/seven/']
			
		}
	}
	getData(){
		React.axios.get('http://localhost:1234/getIndexDate',{
			params:{
				cityCode:'020'
			}
		})
		.then((res)=>{
			console.log(res);
			let totalday = res.data.result.activitySevenInfo;
			let titleArr =[];
			let listArr=[];
			for(let i in totalday){
				titleArr.push(totalday[i].title);
				listArr.push(totalday[i].list)
			}
			this.setState({
				day:titleArr,
				list:listArr
			},()=>{
				console.log(this.state.list[0])
				let storage= window.localStorage;
    			let obj =JSON.parse(localStorage.getItem("list"));
    			console.log($('.itm'))
				if(!obj){
					this.props.history.push({pathname:this.state.href[0],state:{name:this.state.list[0]}});

				}else{
					this.props.history.push({pathname:obj.href,state:{name:obj.listData}})
				}
			})
			console.log(this.state.list);

		})
		.catch((err)=>{
			console.log(err)
		})
	}
	componentDidMount(){
		this.getData();
	}
	changecolor(idx,e){
		if(!$(e.target).hasClass('active')){
			$(e.target).parent().children().map((idx,item)=>{
			$(item).removeClass('active')
			})
			$(e.target).addClass('active');
			//console.log(this.state.list[idx])
			let obj ={};
		      obj.listData=this.state.list[idx];
		      obj.index=idx;
		      obj.href=this.state.href[idx];
		      let storage = window.localStorage;
		      storage.setItem("list", JSON.stringify(obj));
		      console.log(JSON.parse(localStorage.getItem("list")))
			this.props.history.push({pathname:this.state.href[idx],state:{name:this.state.list[idx]}})
		}
		
	}
  render() {
    return (
<div className="Show">
    <div className="block-wrapper">
        <h3 className="block__title">
            七日演出
            <small>
                演出日历
            </small>
        </h3>
        <div className="weekdays">
        {
        	(()=>{
        		return this.state.day.map((itm,idx)=>{
        			return <span className={idx===(JSON.parse(localStorage.getItem("list"))?JSON.parse(localStorage.getItem("list")).index:0)?'item active':'item'} onClick={this.changecolor.bind(this,idx)} key={idx} >{itm}</span>
        		})
        	})()
        }
      
        </div>

    </div>
</div>
);
  }
}

export default Show;
