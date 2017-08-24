var app = require('./config/app_config.js')

// CONFIGURANDO ROTA MAIN DA APLICAÇÃO
app.get('/', function(req, res){
    res.send('API Neri');
})