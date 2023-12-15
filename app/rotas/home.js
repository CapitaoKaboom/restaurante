module.exports = function (app)
{ 
    app.get('/', function(request, response)
    {
        app.app.controllers.home.index(app, request, response)
    })
    app.get("/indexAdmin", function (req, res) {
        app.app.controllers.home.indexAdmin(app, req, res)
    })
}