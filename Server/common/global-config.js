module.exports = {
    graphDB: {
        connection: 'http://192.168.1.80:7200/',
        readTimeout: 30000,
        writeTimeout: 30000,
        repositoryTemp: 'Temperature',
        repositoryHum: 'Humidity',
    },
    kafka:{
        connection: '127.0.0.1:9092',
        topicTemp: 'temperature',
        topicHum: 'humidity'
    }
    
    
}