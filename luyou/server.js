const express=require('express')
const app=express()
const router=require('./router')
app.use('/admin',router)
app.listen(3000,()=>{
    console.log('server start')
})
//引入 后台路由模块
//localhost:3000  是静态目录  先找到他下面的admin文件后 跳转到根据请求样式 看看是跳转到login 还是reg
//我们习惯称后台为admin  代指工作人员