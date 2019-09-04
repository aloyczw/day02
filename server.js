const express=require('express')
const app=express()
app.listen(3000,()=>{
    console.log('server start')
})
//引入express 模块
// app=express()  模块执行
// 开启一个端口为3000 的服务器