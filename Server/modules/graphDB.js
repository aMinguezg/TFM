const globalConfig = require('./../common/global-config.js');

const {ServerClient, ServerClientConfig} = require('graphdb').server;
const {RepositoryClientConfig, RDFRepositoryClient} = require('graphdb').repository;

const config = new ServerClientConfig(globalConfig.graphDB.connection, 0, {});
const server = new ServerClient(config);

const readTimeout = globalConfig.graphDB.readTimeout;
const writeTimeout = globalConfig.graphDB.writeTimeout;

module.exports = {
   getRepository: function(repositoryName){   
    server.hasRepository(repositoryName).then(exists => {
        if (exists) {
            console.log(`Returning the repository --> ${repositoryName}`);
        }
    }).catch(err => console.log('No existe el repositorio'));
          
    const repositoryClientConfig = new RepositoryClientConfig([`${globalConfig.graphDB.connection}repositories/${repositoryName}`], {}, '', readTimeout, writeTimeout);
    return new RDFRepositoryClient(repositoryClientConfig);
   }
};

