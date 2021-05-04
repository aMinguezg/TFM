const globalConfig = require('./../common/global-config.js');
const kafka = require('./../modules/kafka.js');

const {GraphDBServerClient, ServerClient, ServerClientConfig} = require('graphdb').server;
const {RepositoryClientConfig, RDFRepositoryClient, RepositoryConfig, RepositoryType} = require('graphdb').repository;
const {RDFMimeType} = require('graphdb').http;

const endpoint = globalConfig.graphDB.connection

const config = new ServerClientConfig(endpoint, 0, {});
const server = new ServerClient(config);

const readTimeout = globalConfig.graphDB.readTimeout;
const writeTimeout = globalConfig.graphDB.writeTimeout;

function writeDataInGraphDB(repositoryName){
    const configClient = new RepositoryClientConfig(endpoint)
        .setEndpoints([`${endpoint}repositories/${repositoryName}`])
        .setHeaders({
        'Accept': RDFMimeType.RDF_XML
        })
        .setReadTimeout(readTimeout)
        .setWriteTimeout(writeTimeout);
    const repository = new RDFRepositoryClient(configClient);

    const topicName = repositoryName === 'Temperature' ? globalConfig.kafka.topicTemp : globalConfig.kafka.topicHum;
    kafka.loadDataWithKakfaConsumer(topicName, repository);
}

module.exports = {
   doWholeDataCycle: function(repositoryName){   
    server.hasRepository(repositoryName).then(exists => {
        if (exists) {
            console.log(`Returning the repository --> ${repositoryName}`);
            writeDataInGraphDB(repositoryName);
        }
        else{
            console.log(`No existe el repositorio ${repositoryName}`);
            const configRepository = new RepositoryConfig(repositoryName, '', new Map(), '',  repositoryName, RepositoryType.FREE);
            const serverClientDB = new GraphDBServerClient(config);
            serverClientDB.createRepository(configRepository).then(() => {
                console.log(`Repositorio creado: ${repositoryName}`);
                writeDataInGraphDB(repositoryName);
            });
        }
    }).catch(err => console.log(err));
   }
};

