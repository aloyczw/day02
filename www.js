const express=require('express')
const app=express()
const path=require('path')
// app.use('/hhh',express.static(path.join(__dirname,'./hhh')))
// app.use('/',express.static(path.join(__dirname,'./hhh')))
app.use(express.static(path.join(__dirname,'./hhh')))
app.listen(3000,()=>{
    console.log('server start')
})
//静态资源路径   一旦涉及到路径问题   马上引入path 模块  绝对路径
//localhost:3000 静态资源目录
//当文件路径是根目录时  可以省略不写