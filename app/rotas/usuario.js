module.exports = function (app)
{
    app.get('/cadastro_usuario', function (request, response)
    {
       app.app.controllers.usuario.cadastro_usuario(app, request, response)
    })
    app.post('/usuario/cadastrar', function(request, response)
    {
       app.app.controllers.usuario.cadastrar(app, request, response)
    })
    app.get('/usuario/login', function(request, response)
    {
      app.app.controllers.usuario.logar(app, request, response)
    })
    app.post('/usuario/validar', function(request, response)
    {
      app.app.controllers.usuario.validar(app, request, response)
    })
    app.get('/usuario/sair', function(request, response)
    {
      app.app.controllers.usuario.sair(app, request, response)
    })
}
