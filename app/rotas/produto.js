module.exports = function(app)
{
    app.get('/produto/adcionar/:idProduto', function(request,response)
    {
        app.app.controllers.produto.adicionar(app,request,response)
    })
    app.get('/produto/produtos', function(request,response)
    {
        app.app.controllers.produto.listaProdutosAdmin(app,request,response)
    })
    app.get('/produtos', function(request,response)
    {
        app.app.controllers.produto.listaProdutosUsuario(app,request,response)
    })
    app.get('/produto/carrinho', function(request,response)
    {
        app.app.controllers.produto.carrinho(app,request,response)
    })
}