const model = require('./dbconfig').labelModel        //article的model

//文章相关接口

//获取全部标签
module.exports.getAllLabel = function(){
    const r = model.find().then((err,r)=>{
        if(err){
            console.error.bind(console, "connection error:")
        }
        if(r){
            return r
        }
    })
    return r
}

//根据ID获取标签
module.exports.getOneLabelById = function(condition){
    const r = model.findById(condition).then((err,r)=>{
        if(r){
          return {
            success:true,
            data: r
          }
        } else {
          return {
            success:false,
            msg:err
          }
        }
    })
    return r
}
//根据条件获取文章
module.exports.getLabelByCondition = function(condition){
    const r = model.find(condition).then((err,r) => {
        if(r){
            return {
                success: true,
                data:r
            }
        }else {
            return {
                success:false,
                msg:err
            }
        }
    })
    return r
}



