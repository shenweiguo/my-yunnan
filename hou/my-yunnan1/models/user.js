var mongoose=require('../common/db')
//用户数据库
var user=new mongoose.Schema({
	username:String,
	password:String
})
user.statics.findByUsername=function(name,callBack){
	this.find({username:name},callBack);
}
//登录匹配是不是拥有的用户名和密码并且没有处于封零
user.statics.findUserLogin=function(name,password,callBack){
	this.find({username:name,password:password},callBack)
}

var userModel=mongoose.model('user',user);
module.exports=userModel;
