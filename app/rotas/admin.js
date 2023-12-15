module.exports = function (app)
{
    app.get('/cadastro_produto', function (request, response)
    {
       app.app.controllers.admin.cadastro_produto(app, request, response)
    })
    app.post('/admin/cadastrar', function(request, response)
    {
       app.app.controllers.admin.cadastrar(app, resquest, response)
    }) 
    app.get('/listar_usuario', function(request, response)
    {
      app.app.controllers.admin.listar_usuario(app, request, response)
    }) 
    app.get('/editar_usuario', function(request, response)
    {
      app.app.controllers.admin.editar_usuario(app, request, response)
    })    
    app.get('/excluir_usuario', function(request, response)
    {
      app.app.controllers.admin.excluir(app, request, response)
    })
}
