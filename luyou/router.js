//创建路由模块  后台  
const express=require('express')
const router=express.Router()
router.get('/login',(rep,res)=>{
    res.send('login ok')
})
router.post('/reg',(rep,res)=>{
    res.send('reg ok')
})
module.exports=router