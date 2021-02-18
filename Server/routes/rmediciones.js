module.exports = function(app, gestorRDF) {

	app.get('/mediciones', function(req, res) {

        let id = req.query.id;
        let temperatura = req.query.temperatura;
        let humedad = req.query.humedad;
        let resultado = "";

        if(temperatura != null && humedad != null){
            resultado = gestorRDF.almacenarMedicion(id,temperatura,humedad);
        }
        res.send(resultado);
    });

    app.post('/mediciones', function(req, res) {

        let id = req.body.id;
        let temperatura = req.body.temperatura;
        let humedad = req.body.humedad;
        let resultado = "";

        if(temperatura != null && humedad != null){
            resultado = gestorRDF.almacenarMedicion(id,temperatura,humedad);
        }
        res.send(resultado);
    });
    
};
