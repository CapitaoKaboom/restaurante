module.exports.cadastrar = function(app, request, response)
{
        const dados = request.body  

        request.assert('Nome', 'Você deve preencher o campo nome').notEmpty()
        request.assert('Email', 'Você deve preencher o campo email').notEmpty()
        request.assert('Senha', 'O campo senha deve conter entre 5 e 500').len(5, 500)
        request.assert('Confirmar senha', 'Você deve preencher o campo confirmar senha').noEmpty()

        const erros = request.validationErrors()

        if(erros)
        {
            response.render('admin/cadastro_usuario', {erros : erros, noticia : dados})
            return
        }

     const conexao = app.config.conexao
     const modelProduto = new app.app.models.modelProduto(conexao)

     modelProduto.cadastrarProduto(dados, function(error, result)
     {
        response.redirect('/produtos')
     })
}
module.exports.cadastro_produto = function(app, request, response)
{
    if(request.session.id_tipo_usuario != 1 && request.session.id_tipo_usuario != 2)
    {
        response.redirect('/usuario/login')
        return
    }
    response.render('admin/cadastro_produto', {erros : {}, noticia : {}})
}
module.exports.excluir_usuario = function(app, request, response)
{
    const conexao = app.config.conexao
    const modelUsuario = new app.app.models.modelUsuario(conexao)
}
module.exports.listar_usuario = function(app, request, response)
{
    const conexao = app.config.conexao
    const modelUsuario = new app.app.models.modelUsuario(conexao)

    modelUsuario.listar_usuario(function(error, result)
    {
       response.render('admin/listar_usuario', {usuarios: result}) 
    })
}