var usuarioModel =  require('../models/modelUser.js')

exports.mostraUsuario = function(res){
   usuarioModel.getUsers(res);
}

exports.login = function(email, req, res){
  //  console.log("token"+res)
   //  console.log("Conersão token "+token.validaToken(res.token)) 
 usuarioModel.login(email,req, res);
  
}
      

exports.inseriUsuario = function(usuario, res){
    usuario.password = criptografia.encode(usuario.password);
    usuario.token =  token.geraToken(usuario);
    usuarioModel.postUser(usuario.nome, usuario.sobrenome, usuario.email,usuario.password, usuario.token , res);
}

exports.atualizaUsuario = function(usuario, entrada, res){
    usuarioModel.updateUser(usuario.nome, usuario.sobrenome, usuario.email, entrada, res);
}

exports.deletaUsuario = function(nome, res){
    usuarioModel.delete(nome, res);
}


