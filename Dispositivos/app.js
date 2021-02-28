//Imports
const express = require('express')
const app = express();
const kafka = require('kafka-node');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//Kafka
const kakfaClient = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
const kafkaProducer = new kafka.Producer(kakfaClient);

const payloadTemperature = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648401, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature, function(){
        console.log('payloadTemperature send');
    });
});

const payloadTemperature2 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648402, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature2, function(){
        console.log('payloadTemperature2 send');
    });
});

const payloadTemperature3 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648403, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature3, function(){
        console.log('payloadTemperature3 send');
    });
});

const payloadTemperature4 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648404, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature4, function(){
        console.log('payloadTemperature4 send');
    });
});

const payloadTemperature5 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648405, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature5, function(){
        console.log('payloadTemperature5 send');
    });
});

const payloadTemperature6 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648406, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature6, function(){
        console.log('payloadTemperature6 send');
    });
});

const payloadTemperature7 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648407, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature7, function(){
        console.log('payloadTemperature7 send');
    });
});

const payloadTemperature8 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648408, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature8, function(){
        console.log('payloadTemperature8 send');
    });
});

const payloadTemperature9 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648409, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature9, function(){
        console.log('payloadTemperature9 send');
    });
});

const payloadTemperature10 = [
    { topic: 'temperature', messages: `{"variableValue": ${Math.floor(Math.random() * 40)}, "id": 561648410, "timeStampDevice": ${Date.now()}}`}
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadTemperature10, function(){
        console.log('payloadTemperature10 send');
    });
});


const payloadHumidity = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404401, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity, function(){
        console.log('payloadHumidity send');
    });
});

const payloadHumidity2 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404402, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity2, function(){
        console.log('payloadHumidity2 send');
    });
});

const payloadHumidity3 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404403, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity3, function(){
        console.log('payloadHumidity3 send');
    });
});

const payloadHumidity4 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404404, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity4, function(){
        console.log('payloadHumidity4 send');
    });
});

const payloadHumidity5 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404405, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity5, function(){
        console.log('payloadHumidity5 send');
    });
});

const payloadHumidity6 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404406, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity6, function(){
        console.log('payloadHumidity6 send');
    });
});

const payloadHumidity7 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404407, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity7, function(){
        console.log('payloadHumidity7 send');
    });
});

const payloadHumidity8 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404408, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){ 
    kafkaProducer.send(payloadHumidity8, function(){
        console.log('payloadHumidity8 send');
    });
});

const payloadHumidity9 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404409, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity9, function(){
        console.log('payloadHumidity9 send');
    });
});

const payloadHumidity10 = [
    { topic: 'humidity', messages: `{"variableValue": ${Math.floor(Math.random() * 90)}, "id": 1265404410, "timeStampDevice": ${Date.now()}}` }
];
kafkaProducer.on('ready', function (){
    kafkaProducer.send(payloadHumidity10, function(){
        console.log('payloadHumidity10 send');
    });
});

//Start server
app.listen(app.get(5000), () => {
  console.log('Server at port --> 5000')
});

