var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
	var result = url.parse(request.url, true);

	response.writeHeader(200, {'Content-Type:': 'text/html'});
	response.write("<h1>Dados da Query String</h1>");
	for(var key in result.query) {
		response.write("<h2>" + key + " : " + result.query[key] + "</h2>")
	}
	response.end();
});

server.listen(3000, function() {
	console.log('Servidor http');
});