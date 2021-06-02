//Imports
const express = require('express')
const app = express();
const kafka = require('kafka-node');
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const kakfaClient = new kafka.KafkaClient({kafkaHost: 'tfm_kafka-server1_1:9092'});
const kafkaProducer = new kafka.Producer(kakfaClient);

let producerReady = false;
kafkaProducer.on('ready', function (){
   producerReady = true;
});

const sendTemperatureMsg = function(){
    const id = Math.floor(Math.random() * 9);
    const payloadTemperature = [
        { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 5616484${id}, "timeStampDevice": ${Date.now()}}`}
    ];

    if(producerReady){
        kafkaProducer.send(payloadTemperature, function(){
            console.log('payloadTemperature send with id: ', `5616484${id}`);
        });
    }
}

const sendHumidityMsg = function(){
    const id = Math.floor(Math.random() * 9);
    const payloadHumidity10 = [
        { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 12654044${id}, "timeStampDevice": ${Date.now()}}` }
    ];

    if(producerReady){
        kafkaProducer.send(payloadHumidity10, function(){
            console.log('payloadHumidity send with id: ', `12654044${id}`);
        });
    }

}

const msgSender = function (){
    const wait1 = Math.floor(Math.random() * 500)
    const wait2 = Math.floor(Math.random() * 500)
    setTimeout(sendTemperatureMsg, wait1);
    setTimeout(sendHumidityMsg, wait2);
    
}

const mainFunction = function(){
    for(let i = 0; i<=10; i++){
        msgSender()
    }
    setTimeout(mainFunction, 180000);
}

mainFunction();
//Start server
app.listen(app.get(5000), () => {
  console.log('Server at port --> 5000')
});

