const globalConfig = require('./../common/global-config.js');

const kafka = require('kafka-node');
const {RDFMimeType} = require('graphdb').http;

module.exports = {
    turnOnKakfaConsumer: function (topicName, repository, conversorRDF){
        const kakfaClient = new kafka.KafkaClient({kafkaHost: globalConfig.kafka.connection});
        const kafkaConsumer = new kafka.Consumer(kakfaClient, [ {topic: topicName}]);

        kafkaConsumer.on('message', function (message){
            var rdfXml = conversorRDF.ConvertToRdfXml(topicName, message)

            repository.upload(rdfXml, RDFMimeType.RDF_XML).catch((e) => console.log('Repository Error'));
            console.log('Cargado: ' + rdfXml);
        })

        kafkaConsumer.on('error', function (message){
            console.log(message);
        })
    }
}