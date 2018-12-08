const express=require('express');
const Router=express.Router();
//数据模型引入
const User=require('../mongo/model/user.js')
const Goods=require('../mongo/model/goods.js')
const email=require('../mongo/model/sendmail.js')
/**
 * @api {get} /admin/login/ login
 * @apiName login
 * @apiGroup admin
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// 用户名是否存在
Router.post('/getUserInfo',(req,res)=>{
  let name = req.body.name
  console.log(name)
     User.find({name:name})
     .then((data)=>{
      if(data.length>=1){
        res.send({err:0,msg:'查询存在',data:data})
      }else{
          res.send({err:-1,msg:'查询不存在',data:null})
          // console.log(err);
      }	
     })
})



// 验证码

  //获取验证码
  let check={}
 Router.post("/getCode",(req,res)=>{
     
    // console.log(req.body)
    let mail=req.body.mail
  if (!mail) {return res.send('参数错误')}
    let code=parseInt(Math.random(0,1)*10000)
    check[mail]=code
    //发送邮件是异步操作
     email.sendMail(mail,code,(state)=>{
            if (state) {
              res.send('nook')
            }else{
               res.send('ok')
            }          
      })
  })

// 注册插入
Router.post('/getsign',(req,res)=>{
// 1.接受数据

  let {name,pass,code,mail}=req.body
  console.log(name,pass,code,mail)
  
       //插入数据库
       // res.send('验证码正确')
       User.insertMany({name,pass,mail})
       .then((data)=>{
        console.log(mail)
        res.send({err:0,msg:'注册成功',data:null})
       })
       .catch((err)=>{

        console.log(err)
          res.send({err:-1,msg:'注册失败',data:null})
       })
       
   
      
   
})


// 登录
Router.post('/getlogin',(req,res)=>{
  let {name,pass}=req.body
  console.log(name,pass)
     User.find({name,pass})
     .then((data)=>{
      if(data.length>=1){
        res.send({err:0,msg:'查询存在',data:data})
      }else{
          res.send({err:-1,msg:'查询不存在',data:null})
          // console.log(err);
      } 
     })
})

// 列表渲染
Router.post('/getyuan',(req,res)=>{
  let  {pagesize,page}=req.body
  let obj={}
  User.find()
  .then((data)=>{
    // 获取总条数
    obj.total=data.length
      return User.find().sort({shijian:-1}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
  })
  .then((data)=>{
    //处理的是第几页的几条数据
    obj.goodslist=data
    res.send({err:0,msg:'查询成功',data:obj})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询错误',data:null})
  })
})

// 单个删除
Router.post('/delyuan',(req,res)=>{
  let id=req.body.id;
  User.remove({_id:id})
  .then((data)=>{
    res.send({err:0,msg:'删除功',data:null})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'删除no成功',data:null})
  })
})

// 添加管理员

Router.post('/addyuan',(req,res)=>{
// 1.接受数据
  let {name,mail,pass,shijian}=req.body
 User.insertMany({name,mail,pass,shijian})
 .then((data)=>{
  res.send({err:0,msg:'插入成功',data:null})
 })
 .catch((err)=>{
  console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
 })
})


// 批量删除
Router.post('/alldelyuan',(req,res)=>{
  console.log(req.body)
  // let {id,id1,id2} =req.body
  // let array =[id,id1,id2]
  let array =req.body.id
 console.log(array)
  User.remove({_id:{$in:array}})
    //批量删除
  .then((data)=>{
    res.send({err:0,msg:'批量删除成功',data:null})
    })
    .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'批量删除no成功',data:null})
  }) 
})

// 查询ID
Router.post('/xuan',(req,res)=>{
  let id = req.body.id;
  console.log(id)
  User.find({_id:id})
  .then((data)=>{
    res.send({err:0,msg:'修改成功',data:data})
})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'修改no成功',data:null})
  })
})


//修改管理人
Router.post('/updateyuan',(req,res)=>{
  let id=req.body.id;
  console.log(id)
  let {name,mail,pass}=req.body
  User.update({_id:id},{name,mail,pass})
  .then((data)=>{
    res.send({err:0,msg:'修改成功',data:null})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'修改no成功',data:null})
  })

})


// m模糊查询 关键字查询
Router.post('/findyuan',(req,res)=>{

 let  {pagesize,page}=req.body
 let key=req.body.cha;
  let obj={}
  User.find({$or:[{name:{$regex:key}}]})
  .then((data)=>{
    // 获取总条数
    obj.total=data.length
      return User.find({$or:[{name:{$regex:key}}]}).sort({_id:-1}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
  })
  .then((data)=>{
    obj.goodslist=data
    res.send({err:0,msg:'查询成功',data:obj})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询no成功',data:null})
  })

})
//api接口  1. 接受数据 2.处理数据  3.返回结构
module.exports=Router;