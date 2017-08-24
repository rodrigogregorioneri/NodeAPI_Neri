var app = require('./config/app_config.js')


app.get('/', function(req, res){
    res.send('API Neri');
})