const url=require('url')
let string='https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
const myURl=url.parse(string)
console.log(myURl)
//引入url 模块
//有一个完整的url
//url.parse() 将一个url格式字符串 转化为json
//url.format()将一个json格式的对象转化为url格式的字符串
let obj={
    protocol: 'https:',//协议
    slashes: true,//斜杠
    auth: 'user:pass',//用户名账号和密码  一般情况下不会出现
    host: 'sub.example.com:8080',//域名+端口号
    port: '8080',//端口号
    hostname: 'sub.example.com',//域名
    hash: '#hash',//# 以后的字符串
    search: '?query=string',//获取及设置url的序列化查询部分
    query: 'query=string',//键值对
    pathname: '/p/a/t/h',//路径
    path: '/p/a/t/h?query=string',//路径和键值对
    href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash' }
    console.log(url.format(obj)) 
