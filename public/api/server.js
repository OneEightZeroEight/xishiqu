/*
 * 后端接口，用于请求数据
 */

//引入express和request
var express = require('express');
var request = require('request');

//定义后端静态服务器
var app = express();

//网站定位初始化
app.get("/init",(req,res)=>{
	//设置跨域权限
	res.append("Access-Control-Allow-Origin", "*");
	
	
	//向接口请求数据
	request('http://m.xishiqu.com/ajax/home/init',(err,result,body)=>{

			res.send(body);
	
	})
	
});

//获取广州信息
// http://m.xishiqu.com/ajax/home/index?cityCode=020
app.get("/getIndexDate",(req,res)=>{
	res.append("Access-Control-Allow-Origin", "*");

	// console.log(req.query.startNum);
	// console.log(req.query.timestamp);


	request(`http://m.xishiqu.com/ajax/home/index?cityCode=${req.query.cityCode}`,(err,result,body)=>{
			res.send(body);
		});
})




var server = app.listen(8080,()=>{
    var host = server.address().address
    var port = server.address().port
 
    // console.log("访问地址为 http://%s:%s", host, port);
	console.log('server start in port '+8080);
})



