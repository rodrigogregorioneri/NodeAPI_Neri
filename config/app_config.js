var express = require('express');
var http = require('http');
var app = module.exports = express();

// DEFININDO PORTA PADRÃO
app.set('port', process.env.PORT || 3000);

// INSTANCIANDO SERVIDOR
http.createServer(app).listen(app.get('port'), function () {
    console.log('Servidor rodando na porta' + app.get('port'));
});


// MIDDLEWARE onde é setado no cabeçalho da Resposta o CORS e metodos suportados e outras configurações 
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
})