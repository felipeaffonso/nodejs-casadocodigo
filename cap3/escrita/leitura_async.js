var fs = require('fs');
var leituraAsync = function(arquivo) {
	console.log('Fazendo leitura assíncrona');
	var inicio = new Date().getTime();
	fs.readFile(arquivo, function(err, file) {
		console.log('Terminou a leitura assíncrona em ' + (new Date().getTime() - inicio) + ' ms');
	});
	fim = new Date().getTime();
	console.log("Bloqueio assíncrono: " + (fim - inicio) + " ms");
	
};
module.exports = leituraAsync;