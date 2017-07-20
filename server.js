//引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");
//引入ul模块
var url = require("url");
//创建服务器
http.createServer(function(req,res){
    //设置跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    //响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    console.log(req.url);
//  fs.readFile("req.url","utf8",function(err,data){
//          res.end(data)
//  })
}).listen(8023);
console.log("启动成功");