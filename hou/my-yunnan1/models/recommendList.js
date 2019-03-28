var mongoose=require('../common/db')

var recommendList=new mongoose.Schema({
	title:String,//标题
	recommendId:String,//标题id
	theme:String,//主题
	details:String//详情
})
//根据id查
recommendList.statics.findById=function(id,callBack){
	this.find({recommendId:id},callBack)
}
//查询所有
recommendList.statics.findAll=function(callBack){
	this.find({},callBack);
}

var recommendListModel=mongoose.model('recommendList',recommendList)
module.exports=recommendListModel
