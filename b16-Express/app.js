var express= require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(8000);

app.get("/",function(req,res){
	res.send("<h1>Xin chao</h1>");
});
