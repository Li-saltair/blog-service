const model = require('./dbconfig').articleModel        //article的model

//文章相关接口

//获取全部文章
module.exports.getAllArticle = async function(){
    const r = await model.find()
    return r
}

//根据ID获取文章
module.exports.getOneArticleById = function(condition){
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
module.exports.getArticleByCondition = function(condition){
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



