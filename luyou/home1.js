const express=require('express')
const app=express()
const router=require('./home.js')
app.use('/home',router)
app.listen(3000,(req,res)=>{
    console.log('server start')
})