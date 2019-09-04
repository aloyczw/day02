const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.post('/reg',(rep,res)=>{
    console.log('postdata',rep.body)
})
app.listen(3000,()=>{
    console.log('server start')
})
//express 本身不能解析post数据
//bodyParser.urlencoded({extended:false})
//解析表达格式
//bodyParser.json()  解析JSON数据格式