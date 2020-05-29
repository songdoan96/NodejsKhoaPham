var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"application/JSON"});
	var obj = {
		  name : "Song",
		  age : 15,
		  class : "Dtvt"
		};
		res.end(JSON.stringify(obj));
	}).listen(8000);

