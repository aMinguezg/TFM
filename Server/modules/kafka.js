const globalConfig = require('./../common/global-config.js');

const kafka = require('kafka-node');
const conversorRDF = require('./../modules/conversorRDF.js');
const {RDFMimeType} = require('graphdb').http;

module.exports = {
    loadDataWithKakfaConsumer: function (topicName, repository){
        const kakfaClient = new kafka.KafkaClient({kafkaHost: globalConfig.kafka.connection});

        const options = {
            autoCommit: true,
            autoCommitIntervalMs: 5000
        };
        const kafkaConsumer = new kafka.Consumer(kakfaClient, [ {topic: topicName}], options);

        kafkaConsumer.setMaxListeners(11);

        kafkaConsumer.on('message', function (message){
            var rdfXml = conversorRDF.ConvertToRdfXml(topicName, message)
            repository.upload(rdfXml, RDFMimeType.RDF_XML).catch((e) => console.log('Repository Error'));
            console.log('Loaded: ' + rdfXml);
        })

        kafkaConsumer.on('error', function (message){
            console.log(message);
        })
    }
}