//  分析文件拿到想要的信息内容
const cheerio=require('cheerio');//引入提取html页面内容的模块
const fs=require('fs');//文件控制模块
fs.readFile('./taobao.html',(err,data)=>{
    let string=data.toString()
    console.log(data)
    const $=cheerio.load(string);
    $('img').each((index,item)=>{
        console.log(index)
        console.log($(item).attr('src'))
    })
})
//fs.readFile()读取html文件
//tostring()方法是将data 转化为字符串类型
//data  他是buffer类 是一组二进制数据的缓存区
// cheerio.load()  解析html
// cheerio 的选择器和jquery一模一样
