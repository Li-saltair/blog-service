const model = require('./dbconfig').articleModel        //article的model

//文章相关接口

const getAllArticle = function(){
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

