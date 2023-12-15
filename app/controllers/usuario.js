module.exports.cadastro_usuario = function(app, request, response)
{
    response.render('usuario/cadastro_usuario', {erros : {}, usuario : {}})
}
module.exports.cadastrar = function(app, request, response)
{
        const dados = request.body  

        request.assert('nome', 'Você deve preencher o campo Nome').notEmpty()
        request.assert('email', 'Você deve preencher o campo E-mail').notEmpty()
        request.assert('senha', 'Você deve preencher o campo Senha').notEmpty()
        request.assert('senha', 'o campo Senha deve ter no mínimo 6 caracteres').len(6)
        request.assert('confsenha', 'Você deve preencher o campo Confirmar Senha').notEmpty()

        const erros = request.validationErrors()

        if(erros)
        {
            response.render('usuario/cadastro_usuario', {erros : erros, usuario : dados})
            return
        }

     const conexao = app.config.conexao
     const modelUsuario = new app.app.models.modelUsuario(conexao)

     modelUsuario.getUsuarioByEmail(dados.email, function(error, result)
     {
        console.error(error)
        if(result == undefined) {
            let erros = [{msg: 'Este e-mail já está sendo usado'}]
            response.render('usuario/cadastro_usuario', {erros: erros, usuario: dados})
            return
        }
        else
        {
            modelUsuario.cadastrar(dados, function(error, result)
            {
                console.log(error)
               response.redirect('/usuario/login')
            }) 
        }
     })
}
module.exports.logar = function (app, request, response)
{
    response.render('usuario/login', {erros: {}, usuario: {}})
}
module.exports.validar = function (app, request, response)
{
    const dados = request.body

    request.assert('email', 'Você deve preencher o campo E-mail').notEmpty()
    request.assert('senha', 'Você deve preencher o campo Senha').notEmpty()

    const erros = request.validationErrors()
    
    if(erros)
    {
        response.render('usuario/login', {erros: erros, usuario: dados})
        return
    }
    
    const conexao = app.config.conexao
    const modelUsuario = new app.app.models.modelUsuario(conexao)

    modelUsuario.getUsuario(dados, function(error, result)
    {
        
        if(result.length <= 0)
        {
            let erros = [{msg:'Usuário não encontrado'}]
            response.render('usuario/login', {erros: erros, usuario:dados})
            return
        }
        else
        {
           request.session.id_tipo_usuario = result[0].id_tipo_usuario
           request.session.id_usuario = result[0].id
           if(result[0].id_tipo_usuario == 1)
           {
             response.redirect("/")
             return
           }
           else{
            response.redirect("/indexAdmin")
            return
           }
        }
    })
}
module.exports.sair = function(app, request, response)
{
    request.session.destroy(function(error)
    {
        response.redirect('/usuario/login')
    })
}