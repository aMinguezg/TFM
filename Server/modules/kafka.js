const kafka = require('kafka-node');

module.exports = {
    turnOnKakfaConsumer: function (topicName, repository, conversorRDF){
        const kakfaClient = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
        const kafkaConsumer = new kafka.Consumer(kakfaClient, [ {topic: topicName}]);

        kafkaConsumer.on('message', function (message){
            var rdfXml = conversorRDF.ConvertToRdfXml(message)

            repository.upload(rdfXml, RDFMimeType.RDF_XML).catch((e) => console.log('Error repositorio'));
            console.log('Cargado: ' + rdfXml);
        })

        kafkaConsumer.on('error', function (message){
            console.log(message);
        })
    }
}