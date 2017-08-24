var app = require('./config/app_config.js')
var userREST = require('./rest/userREST.js');

// CONFIGURANDO ROTA MAIN DA APLICAÇÃO
app.get('/', function(req, res){
    res.send('API Neri');
})


app.use('/usuario', userREST);