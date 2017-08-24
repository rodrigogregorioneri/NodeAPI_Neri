var conexao = require('../config/conexao.js')
var conection = conexao.getConection;

exports.getUsers = function(res){
    conection.query('SELECT * FROM users', function (error, rows, fields) {
        if (!!error) {
            res.send(error);
        } else {
            res.send(rows);

        }
    });
}


exports.login = function(email, req, res){
    conection.query('SELECT token FROM users WHERE  mail=?', [email],function (error, rows, fields) {
        if (!!error) {
            res.send(error);
        } else {
            res.send(rows);
        }
    });
}






exports.getUserName = function(name, req , res){
    conection.query("SELECT * from users WHERE name=?", [name], function(error, rows, fields){
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }

    })
}



exports.getEmail = function(email, req, res){
    conection.query("SELECT * from users WHERE email=?", [email], function(error, rows, fields){
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }

    })

}



exports.postUser = function(nome, sobrenome, email, password,token, res){
        conection.query("insert into users (name, lastname, mail, password,token) values (?,?,?,?,?);",[nome,sobrenome,email,password,token], function (error, rows, fields) {
        if (!!error) {
            res.send(error);
        } else {
            console.log('produtos: ', rows);
            console.log("Senha Criptografada:  "+password);
            res.send(rows);
        }
    });
}


exports.updateUser = function(nome, sobrenome, email, nomepesquisa, res){
   conection.query("UPDATE users SET name=?, lastname=?, mail=? WHERE name=?",[nome, sobrenome, email, nomepesquisa], function(error, rows, fields) {
       if(!error){
            res.send(error);
       }else{
            
            res.send(rows);
       }
   })
}

exports.delete = function(nome, res){
        conection.query('DELETE FROM users WHERE name=?',[nome], function(error, rows, fields){
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
        
    })
}

