//前台路由
//前台  代指使用者

const express=require('express')
const router=express.Router()
router.get('/login',(rep,res)=>{
    res.send('前台login ok')
})
router.post('/reg',(rep,res)=>{
    res.send('前台reg ok')
})
module.exports=router