//  读取某一张图片
const request=require('request')//引入node.js ajax请求数据模块
const fs=require('fs')//引入文件控制系统
let  imgurl='http://source.qunarzz.com/piao/images/camel_238_180.jpg'//图片路径
request(imgurl,(err,response,body)=>{
    console.log(err)
    fs.writeFile('./demo.jpg',body,{encoding:'binary'},(err)=>{
        console.log(err)
    })
})
request(imgurl).pipe(fs.createWriteStream('./demo.jpg'))
//request()有二个参数  一参是完整url地址 二参是一个回调函数有三参
//一参是错误信息 二参是响应对象 三参是请求数据
//fs.writeFile()一参数路径文件 二参是内容 {encoding:'binary}编码方式是二进制协议 
//三参回调函数  一参  错误信息
//fs.createWriteStream()创建一个写入流