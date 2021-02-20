const {ServerClient, ServerClientConfig} = require('graphdb').server;
const {RepositoryClientConfig, RDFRepositoryClient} = require('graphdb').repository;
const {RDFMimeType} = require('graphdb').http;
    
const config = new ServerClientConfig('http://192.168.1.80:7200/', 0, {});
const server = new ServerClient(config);
    
const readTimeout = 30000;
const writeTimeout = 30000;

module.exports = {
   getRepository: function(repositoryName){   
    server.hasRepository(repositoryName).then(exists => {
        if (exists) {
            console.log(`Returning the repository --> ${repositoryName}`);
        }
    }).catch(err => console.log(err));
          
    const repositoryClientConfig = new RepositoryClientConfig([`http://192.168.1.80:7200/repositories/${repositoryName}`], {}, '', readTimeout, writeTimeout);
    return new RDFRepositoryClient(repositoryClientConfig);
   }
};

