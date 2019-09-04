const fs=require('fs')
const path=require('path')
// fs.readFile('./taobao.html',(err)=>{
//     console.log(err)
// })
//以上是错误代码  ./  是当前执行路径 而不是文件所在路径
// _dirname 是当前文件所在的绝对路径，该路径和执行路径没有任何关系
console.log(path.join(__dirname,'./taobao.html'))
fs.readFile(path.join(__dirname,'./taobao.html'),(err)=>{
    console.log(err)
})