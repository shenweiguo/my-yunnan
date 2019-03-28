var mongoose=require('mongoose');
var url='mongodb://localhost/myyunnan1'
mongoose.connect(url);
//连接数据库
module.exports=mongoose;
