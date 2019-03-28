var mongoose=require('../common/db')

var recommendImg=new mongoose.Schema({
	recommendSrc:String//图片路径
})
//查询所有
recommendImg.statics.findAll=function(callBack){
	this.find({},callBack);
}
//根据路径查
recommendImg.statics.findByImg=function(recommends,callBack){
	thid.find({recommendSrc:recommends},callBack)
}
var recommendImgModel=mongoose.model('recommendImg',recommendImg)
module.exports=recommendImgModel