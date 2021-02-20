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
kafka.turnOnKakfaConsumer('Temperature', repositoryTemperature, conversorRDF);
kafka.turnOnKakfaConsumer('Humidity', repositoryHumidity, conversorRDF);


//Variables
app.set('puerto', 3000);


//Rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
});

require("./routes/rmediciones.js")(app, conversorRDF);  

//Kafka

//Levantar servidor
app.listen(app.get('puerto'), () => {
  console.log('Ejemplo que escucha en el puerto 3000')
});

