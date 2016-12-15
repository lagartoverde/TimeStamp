var http=require("http");

var server=http.createServer(function(req,res){
	var d=new Date("3 June 2017");
	res.write(d.getYear());
	res.end();
});
server.listen(process.env.PORT ||8080);
console.log("Server Running");