module.exports = {
    graphDB: {
        connection: 'graphdb:7200/',
        readTimeout: 30000,
        writeTimeout: 30000,
        repositoryTemp: 'Temperature',
        repositoryHum: 'Humidity',
    },
    kafka:{
        connection: 'tfm_kafka-server1_1:9092',
        topicTemp: 'temperature',
        topicHum: 'humidity'
    }
    
    
}