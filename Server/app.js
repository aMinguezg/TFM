//Importaciones
const express = require('express')
const app = express();
const conversorRDF = require('./modules/conversorRDF.js');
const graphDB = require('./modules/graphDB.js')
const kafka = require('./modules/kafka.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Get graphDB conections with repositories
const repositoryTemperature = graphDB.getRepository('Temperature') ; 
const repositoryHumidity = graphDB.getRepository('Humidity') ; 

// Turn on kafka consumers
kafka.turnOnKakfaConsumer('temperature', repositoryTemperature, conversorRDF);
kafka.turnOnKakfaConsumer('humidity', repositoryHumidity, conversorRDF);

//Levantar servidor
app.listen(app.get(3000), () => {
  console.log('Ejemplo que escucha en el puerto 3000')
});

