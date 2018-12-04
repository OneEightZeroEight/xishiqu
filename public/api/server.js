/*
 * 后端接口，用于请求数据
 */

//引入express和request
var express = require('express');
var request = require('request');


//导入proxy
// var proxy = require('http-proxy-middleware');



//定义后端静态服务器
var app = express();
//context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api


//options可选的配置参数请自行看readme.md文档，通常只需要配置target，也就是你的api所属的域名。
// const options = {
//     target: 'http://m.xishiqu.com',
//     changeOrigin: true
// }

//将options对象用proxy封装起来，作为参数传递
// const apiProxy = proxy(options);

//现在你只需要执行这一行代码，当你访问需要跨域的api资源时，就可以成功访问到了。
// app.use('/apiXsq', apiProxy);

//网站定位初始化
app.get("/init", (req, res) => {
	//设置跨域权限
	res.append("Access-Control-Allow-Origin", "*");


	//向接口请求数据
	request('http://m.xishiqu.com/ajax/home/init', (err, result, body) => {

		res.send(body);

	})

});


//获取地点列表
//http://m.xishiqu.com/ajax/home/cityList
app.get("/getCityList",(req,res)=>{
	res.append("Access-Control-Allow-Origin", "*");
	
	request(`http://m.xishiqu.com/ajax/home/cityList`, (err, result, body) => {
		res.send(body);
	});
})




//获取地点
//http://m.xishiqu.com/ajax/home/setCity?cityCode=020
app.get("/getCity", (req, res) => {

	res.append("Access-Control-Allow-Origin", "*");

	request(`http://m.xishiqu.com/ajax/home/setCity?cityCode=${req.query.cityCode}`, (err, result, body) => {
		res.send(body);
	});
})



//获取广州信息
// http://m.xishiqu.com/ajax/home/index?cityCode=020


app.get("/getIndexData", (req, res) => {


	res.append("Access-Control-Allow-Origin", "*");
	res.append("Content-Type", "application/json");
	res.append("Cache-control","no-cache");
	res.append("Cache-control", "private, must-revalidate");
	res.append("Pragma", "no-cache");
	res.append("Expires",-1);


	console.log(req.query.cityCode);


	request({
		url: `http://m.xishiqu.com/ajax/home/index?cityCode=${req.query.cityCode}`,
		headers: {
			'Cookie': `cityCode=${req.query.cityCode}`
		}

	}, (err, result, body) => {
		res.send(body);
	});

})

// app.get("/getIndexData020",(req,res)=>{

// 	res.append("Access-Control-Allow-Origin", "*");
// 	res.append("Content-Type", "application/json");



var server = app.listen(1234,()=>{



    var host = server.address().address
    var port = server.address().port
 
    // console.log("访问地址为 http://%s:%s", host, port);

	console.log('server start in port '+1234);


})

// 	request(`http://m.xishiqu.com/ajax/home/index?cityCode=020`,(err,result,body)=>{
// 			res.send(body);
// 		});
// })

// app.get("/getIndexData411",(req,res)=>{

// 	res.append("Access-Control-Allow-Origin", "*");
// 	res.append("Content-Type", "application/json");
// 	res.append("Pragma", "no-cache");



// 	request(`http://m.xishiqu.com/ajax/home/index?cityCode=411`,(err,result,body)=>{
// 			res.send(body);
// 		});
// })

// app.get("/getIndexData591",(req,res)=>{

// 	res.append("Access-Control-Allow-Origin", "*");
// 	res.append("Content-Type", "application/json");



// 	request(`http://m.xishiqu.com/ajax/home/index?cityCode=591`,(err,result,body)=>{
// 			res.send(body);
// 		});
// })

>>>>>>> d490ed71d58179ca717ec819c3a25ed8235b9446


var server = app.listen(1234, () => {
	var host = server.address().address
	var port = server.address().port

	console.log('server start in port ' + 1234);
})