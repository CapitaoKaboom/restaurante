module.exports.listaProdutosAdmin = function(app,request,response)
{
    const conexao = app.config.conexao
    const modelProduto = new app.app.models.modelProduto(conexao)

    modelProduto.getProdutos(function (error, result)
    {
        response.render('produto/listar_produto', {produtos: result})
    })
}
module.exports.listaProdutosUsuario = function(app,request,response)
{
    const conexao = app.config.conexao
    const modelProduto = new app.app.models.modelProduto(conexao)

    modelProduto.getProdutos(function (error, result)
    {
        response.render('produto/produtos', {produtos: result})
    })
}
module.exports.adicionar = async function(app, request, response)
{
    if(request.session.id_tipo_usuario != 1 && request.sesssion.id_tipo_usuario)
    {
    response.redirect('/usuario/login')
    return;
    }
}