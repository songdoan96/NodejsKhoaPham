var http = require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("Xin chao Song ! Day la vd ve webserver text.");
	}).listen(8888);

