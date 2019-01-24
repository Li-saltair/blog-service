const model = require('./dbconfig').personModel        //article的model

//文章相关接口

//获取全部标签
module.exports.getPerson = async function(){
    const r = await model.find()/*.then((err,r)=>{
        if(err){
            console.error.bind(console, "connection error:")
        }
        if(r){
            console.log(r)
            return r
        }
    })*/
    return r
}



