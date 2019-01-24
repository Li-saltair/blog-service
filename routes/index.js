const router = require('koa-router')()
const model = require('./../model/article')
//需要修改
router.prefix('/article')
/*
router.get('/get_all_article', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})*/

router.get('/', async (ctx, next) => {
  /*const user = {
    name:'老李',
    birthday:'1993-9-13',
    hobby:'sleep',
    skill:'随便一点什么'
  }
  model.personModel.create(user).then(r=>{
    if(r){
      console.log(r)
    }
    
  })
  ctx.body = 'koa2 string'*/

  //console.log(model.getPerson())
  //接口正确调用方式
  //ctx.body = await model.getPerson()
  ctx.body = await model.getAllArticle()
  
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/get_all_article', async (ctx, next)=>{
  let r = await model.personModel.find().then((err,r)=>{
    if(r){
      return {
        success:true,
        data:r
      }
    }else {
      return {
        success:false,
        msg:err
      }
    }
  })
  ctx.body = r
})

router.get('/get_one_article_by_id', async (ctx, next)=>{
  
  ctx.body = r
})



module.exports = router
