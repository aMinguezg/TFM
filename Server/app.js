//Importaciones
const express = require('express')
const app = express();
const gestorRDF = require("./modules/gestorRDF.js");
const kafka = require('kafka-node');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Graphdb pruebas
const {ServerClient, ServerClientConfig} = require('graphdb').server;
const {RepositoryClientConfig, RDFRepositoryClient} = require('graphdb').repository;
const {RDFMimeType} = require('graphdb').http;

const config = new ServerClientConfig('http://192.168.1.80:7200/', 0, {});
const server = new ServerClient(config);

const readTimeout = 30000;
const writeTimeout = 30000;
const repositoryClientConfig = new RepositoryClientConfig(['http://192.168.1.80:7200/repositories/test'], {}, '', readTimeout, writeTimeout);
const repository = new RDFRepositoryClient(repositoryClientConfig);


server.hasRepository('test').then(exists => {
  if (exists) {
     console.log('Existe repositorio test!!');
  }
}).catch(err => console.log(err));


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

