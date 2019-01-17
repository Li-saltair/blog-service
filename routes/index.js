const router = require('koa-router')()
const model = require('./../model/dbconfig')

router.prefix('/article')
/*
router.get('/get_all_article', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})*/

router.get('/string', async (ctx, next) => {
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
    
  })*/
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/get_all_article', async (ctx, next)=>{
  var r = await model.personModel.find().then(r=>{
    if(r){
      return {
        success:true,
        data:r
      }
    }
  })
  
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.body = r
  //return r
})

module.exports = router
