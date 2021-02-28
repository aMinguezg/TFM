//Imports
const express = require('express')
const app = express();
const conversorRDF = require('./modules/conversorRDF.js');
const graphDB = require('./modules/graphDB.js')
const kafka = require('./modules/kafka.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const globalConfig = require('./common/global-config.js');

// Get graphDB conections with repositories
const repositoryTemperature = graphDB.getRepository(globalConfig.graphDB.repositoryTemp) ; 
const repositoryHumidity = graphDB.getRepository(globalConfig.graphDB.repositoryHum) ; 

// Turn on kafka consumers
kafka.turnOnKakfaConsumer(globalConfig.kafka.topicTemp, repositoryTemperature, conversorRDF);
kafka.turnOnKakfaConsumer(globalConfig.kafka.topicHum, repositoryHumidity, conversorRDF);

//Start server
app.listen(app.get(3000), () => {
  console.log('Server at port --> 3000')
});

