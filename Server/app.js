//Importaciones
const express = require('express')
const app = express();
const gestorRDF = require("./modules/gestorRDF.js");
const kafka = require('kafka-node');
const graphDB = require('./modules/graphDB.js')
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Get graphDB conections with repositories
const repositoryTemperature = graphDB.getRepository('Temperature') ; 
const repositoryHumidity = graphDB.getRepository('Humidity') ; 



//Variables
app.set('puerto', 3000);


//Rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
});

require("./routes/rmediciones.js")(app, gestorRDF);  

//Kafka
const kakfaClient = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
const kafkaConsumer = new kafka.Consumer(kakfaClient, [ {topic: 'TestTopic'}]);

kafkaConsumer.on('message', function (message){
  var rdfXml = gestorRDF.ConvertToRdfXml(message)

  repository.upload(rdfXml, RDFMimeType.RDF_XML).catch((e) => console.log('Error repositorio'));
  console.log('Cargado: ' + rdfXml);
})

kafkaConsumer.on('error', function (message){
  console.log(message);
})
//Levantar servidor
app.listen(app.get('puerto'), () => {
  console.log('Ejemplo que escucha en el puerto 3000')
});

