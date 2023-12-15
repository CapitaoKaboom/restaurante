const usuario = require('../rotas/usuario')

function Usuario(conexao)
{
    this._conexao = conexao
    this._crypto = require("crypto")
}
Usuario.prototype.cadastrar = function(dados, callback)
{
    dados.senha = this._crypto.createHash('md5').update(dados.senha).digest('hex')
    delete dados.confsenha
    this._conexao.query(`insert into usuario set ?`, dados, callback)
}
Usuario.prototype.getUsuarioByEmail = function(email, callback)
{
    this._conexao.query(`select * from usuario WHERE email = '${email}'`, callback)
}
Usuario.prototype.getUsuario = function(dados, callback)
{
    const senha = this._crypto.createHash('md5').update(dados.senha).digest('hex')
    this._conexao.query(`select * from usuario WHERE email = '${dados.email}' and senha = '${senha}'`, callback)
}
Usuario.prototype.logar =  function(dados, callback)
{
    this._conexao.query('select * from usuario WHERE')
}
module.exports = function()
{
    return Usuario
}