var express = require('express');
var router = express.Router();
var recommendList=require('../models/recommendList')
var recommendImg=require('../models/recommendImg')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recommendList',function(req,res,next){
	recommendList.findAll(function(err,getRecommendList){
		res.json({status:0,message:"获取推荐",data:getRecommendList[0].title})
	})
})

router.get('/recommendListbyid',function(req,res,next){
	recommendList.findById(req.body.recommendId,function(err,getRecommendList){
		res.json({status:0,message:"获取推荐",data:getRecommendList})
	})
})

router.get('/recommendImg',function(req,res,next){
//		var tuijian = new recommendImg({
//		recommendTitle:'1',
//		recommendSrc:'../static/t_20.gif',
//		recommendId:"cha"
//	});
//	tuijian.save();
//	console.log(123);
	recommendImg.findAll(function(err,getRecommendImg){
		res.json({status:0,message:"获取成功",data:getRecommendImg})
	})
})

module.exports = router;
