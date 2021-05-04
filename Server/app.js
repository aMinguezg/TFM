//Imports
const express = require('express')
const app = express();

const graphDB = require('./modules/graphDB.js')
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const globalConfig = require('./common/global-config.js');


// Start graphDB conections with repositories
graphDB.doWholeDataCycle(globalConfig.graphDB.repositoryTemp) ;
graphDB.doWholeDataCycle(globalConfig.graphDB.repositoryHum) ; 

//Start server
app.listen(app.get(3000), () => {
  console.log('Server at port --> 3000')
});

