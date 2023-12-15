function Produto (conexao)
{
    this._conexao = conexao
}
Produto.prototype.getProdutos = function(callback)
{
    this._conexao.query('select * from produto', callback)
}
Produto.prototype.getProduto = function(id, callback)
{
    this._conexao.query(`select * from produto where id = ${id}`, callback) 
}
Produto.prototype.cadastrarProduto = function(dados, callback)
{
    this._conexao.query('insert into produto set ?', dados, callback)
}
Produto.prototype.getProdutoById = function (idProduto) {
    return new Promise((resolve, reject) => {
        this._conexao.query(`SELECT * FROM produto WHERE id = '${idProduto}';`, function(errors, result) {
            resolve(result[0]);
        })
    })
}
module.exports = function()
{
    return Produto
}
