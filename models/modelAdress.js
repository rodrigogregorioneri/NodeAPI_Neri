var conexao = requestAnimationFrame('../config/conexao.js')
var conection = conexao.getConection;

exports.getEnderecos = function (res) {
    conecftion.query("SELECT * FROM endereco", function (error, rows, fields) {
        if (!!error) {
            res.send(error);
        } else {
            res.send(rows);
        }
    })
}

exports.getOneEndereco = function (res, id) {
    conection.query("SELECT * FROM endereco WHERE idendereco=?", [id], function (error, rows, fields) {
        if (!!error) {
            res.send(error);
        } else {
            res.send(rows);
        }
    })
}


exports.insertEndereco = function (endereco, req, res) {
    conection.query("INSERT into endereco (pais, estado, cidade, cep, bairro, rua, numero) VALUES (?,?,?,?,?);", [endereco.pais, endereco.estado, endereco.cidade, endereco.cep, endereco.bairro, endereco.rua, endereco.numero], function (error, rows, fields) {
        if (!!error) {
            res.send(error);
        } else {
            res.send(rows);
        }
    })
}

exports.updateEndereco = function (endereco, req, res) {
    conection.query("", [], function (error, rows, fieds) {
        if (!!error) {
            res.send(error);
        } else {
            res.send(rows)  
        }

    })
}


