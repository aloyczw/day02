//利用爬虫 获取有效信息
const request=require('request');//node.js发送请求的需要用到的模块
const fs=require('fs');//文件控制系统
let url='https://www.taobao.com/'//url地址
request(url,(err,response,body)=>{
    console.log(body)
    fs.writeFileSync('./taobao.html',body)
})
//request() get 请求 第一个参数：请求的完整url  包含参数
//    第二个参数是：请求结果回调函数 有三个参数 一参  本着错误优先原则 二参响应对象 三参 请求数据
//fs.writeFileSync() 同步创建文件