//字符串与对象之间转化
const qs=require('querystring')//引入querystring 模块
let string='us=wangyi&ps=123&age=16'
console.log(qs.parse(string,'=','&'))
let obj={
    us:'wangyi',
    pa:123,
    age:16
}
console.log(qs.stringify(obj))
//qs.parse() 字符串转化为对象   parse()有三个参数  一参是字符串 二三默认是 & =
//注意  出现20%  代表的是空格
// qs.stringify() 对象转化为字符串
