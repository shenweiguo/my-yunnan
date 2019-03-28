var express = require('express');
var router = express.Router();
var user=require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function(req,res,next){
	if(!req.body.username){
		return res.json({status:1,message:"用户名为空"});
	}
	if(!req.body.password){
		return res.json({status:1,message:"密码为空"});
	}
	user.findByUsername(req.body.username,function(err,userSave){
		if(userSave.length!=0){
			return res.json({status:1,message:"用户已注册"})
		}else{
			var registerUser=new user({
				
				username:req.body.username,
				password:req.body.password
			})
			registerUser.save(function(){
			 return	res.json({status:0,message:"注册陈宫"})
			})
		}
	})
})

////用户登录接口
router.post('/login',function(req,res,next){
	//验证完整性,这里使用简单的if方式,可以使用正则表达式对输入的格式进行验证
	if(!req.body.username){
		res.json({status:1,message:"用户名为空"})
	}
	if(!req.body.password){
		res.json({status:1,message:"密码为空"})
	}
	user.findUserLogin(req.body.username,req.body.password,function(err,userSave){
		if(userSave.length!=0){
			//通过md5查看密码
//			var token_after=getMD5Password(userSave[0]._id)
			res.json({status:0,message:"用户登录成功"})
		}else{
			res.json({status:1,message:"用户名或者密码错误"})
		}
	})
});
module.exports = router;
