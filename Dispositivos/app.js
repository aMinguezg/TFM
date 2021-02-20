//Importaciones
const express = require('express')
const app = express();
const kafka = require('kafka-node');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//Variables
app.set('puerto', 5000);

//Kafka
const kakfaClient = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
const kafkaProducer = new kafka.Producer(kakfaClient);
const timeStamp = Date.now();
const payloads = [
    { topic: 'temperature', messages: `{"variableValue": 25, "id": 561648464, "timeStampDevice": ${timeStamp}}`},
    { topic: 'humidity', messages: `{"variableValue": 45, "id": 1265404467, "timeStampDevice": ${timeStamp}}` }
];

const payloads2 = [
    { topic: 'TestTopic', messages: `{"temperature": 250, "humidity": 450}` },
    { topic: 'TestTopic', messages: `{"temperature": 290, "humidity": 560}` }
];

const payloads3 = [
    { topic: 'TestTopic', messages: `{"temperature": 310, "humidity": 780}` },
    { topic: 'TestTopic', messages: `{"temperature": 320, "humidity": 970}` }
];

kafkaProducer.on('ready', function (){
  
  kafkaProducer.send(payloads, function(){
      console.log('Payloads send');
  });
});

/*kafkaProducer.on('ready', function (){
  
    kafkaProducer.send(payloads2, function(){
        console.log('Payloads send');
    });
});

kafkaProducer.on('ready', function (){
  
    kafkaProducer.send(payloads3, function(){
        console.log('Payloads send');
    });
});*/
//Levantar servidor
app.listen(app.get('puerto'), () => {
  console.log('Ejemplo que escucha en el puerto 5000')
});

