const express=require('express')
const app=express()
app.get('/test/hhh',(req,res)=>{
    console.log('hhhheee')
    res.send('你好9月')
})
app.listen(3000,()=>{
    console.log('server start')
})
//get 接口测试
// send() 接收数据一定要有 不然会响应 一直转圈 直到超时自动关闭