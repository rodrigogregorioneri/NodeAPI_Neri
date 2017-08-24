var express = require('express');
var router = express.Router();
var businessUser = require('../business/businessUser.js');
var app = require('../config/app_config.js');



    router.get('/mostra', function (req, res) {
        businessUser.mostraUsuario(res);
    })

    router.post('/login/:email', function(req, res){
              businessUser.login(req.params.email,req, res);

    })

    router.post('/insert/:nome/:sobrenome/:email/:password', function (req, res) {
        var usuario = {
            nome: req.params.nome,
            sobrenome: req.params.sobrenome,
            email: req.params.email,
            password: req.params.password,
            token: null
        }
        businessUser.inseriUsuario(usuario, res);
    })

    router.put('/atualizar/:nome/:sobrenome/:email/:entrada/', function (req, res) {
        var usuario = {
            nome: req.params.nome,
            sobrenome: req.params.sobrenome,
            email: req.params.email,
            entrada: req.params.entrada
        }
        businessUser.atualizaUsuario(usuario, usuario.entrada, res);
    })


    router.delete('/delete/:nome', function (req, res) {
        businessUser.deletaUsuario(req.params.nome, res);
    })


module.exports = router;






