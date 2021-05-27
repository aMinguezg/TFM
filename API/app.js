const express = require('express')
var cors = require('cors')
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const {ServerClient, ServerClientConfig} = require('graphdb').server;
const {RDFMimeType} = require('graphdb').http;

const config = new ServerClientConfig('http://localhost:7200/', 0, {});
const server = new ServerClient(config);



app.get('/mediciones', function(req, res) {
    server.getRepositoryIDs().then(ids => {
        res.send(ids);
     }).catch(err => console.log(err));
    
})

app.listen(4000, () => {
    console.log('Server at port --> 4000')
});