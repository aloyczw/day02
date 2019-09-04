const express=require('express')
const app=express()
app.post('/postdemo',(req,res)=>{
    console.log('hehe')
    res.send('post测试')
})
app.listen(3000,()=>{
    console.log('server start')
})