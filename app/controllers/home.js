module.exports.index = function(app, request, response)
{
   if(request.session.id_tipo_usuario != 1 && request.session.id_tipo_usuario != 2)
   {
       response.redirect('/usuario/login')
       return
   }
   
   response.render('home/index')            
}
module.exports.indexAdmin = function (app, request, response)
{
    if (request.session.id_tipo_usuario != 2) 
    {
        response.redirect("/usuario/login")
        return
    }
    else {
        response.render("home/indexAdmin")
        return
    }
}