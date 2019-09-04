//对于中文的解码编码
const qs=require('querystring');
let string='us=网易&ps=123'
console.log(qs.escape(string))
let code='us%3D%E7%BD%91%E6%98%93%26ps%3D123'
console.log(qs.unescape(code))
//qs.escape()  将中文编码
//qs.unescape() 解码