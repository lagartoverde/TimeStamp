var http=require("http");
var url=require("url");

var server=http.createServer(function(req,res){
	var query=url.parse(req.url).pathname;
	var queryWithoutSlash = query.substring(1);
	var queryDecode=decodeURI(queryWithoutSlash);
	console.log("Request for date "+queryDecode);
	if(parseInt(queryDecode)==queryDecode){
		queryDecode=parseInt(queryDecode);
	}
	var date=new Date(queryDecode);
	var resultObj={
		"unix":date.getTime(),
		"natural":date.toDateString()
	}
	res.write(JSON.stringify(resultObj));
	res.end();
});
server.listen(process.env.PORT ||8080);
console.log("Server Running");