const express=require('express')
const app=express()

app.get('/login',(req,res)=>{
    let data=req.query
    console.log(data)
    if(data.us==='wangyi'&& data.ps==='123'){
        res.send('登录ok')
    }else{
        res.send('登录失败')
    }
})
app.listen(3000,()=>{
    console.log('server start')
})
