module.exports = {

    ConvertTemperatureToRdfXml: function(string, timeStampServer){
        const valuesJson = JSON.parse(string.value);
        const temperature = valuesJson.temperature;
        const id = valuesJson.id;
        const timeStampDevice = valuesJson.timeStampDevice;
        const rdfInXml = `<rdf:RDF
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/">
        <rdf:Device rdf:about="http://198.23.4.33/${id}">
         <dc:temperature>${temperature}</dc:temperature>
         <dc:timedevice>${timeStampDevice}</dc:timedevice>
         <dc:timeserver>${timeStampServer}</dc:timeserver>
        </rdf:Device>
        </rdf:RDF>
        `
        return rdfInXml;
    },

    ConvertHumidityToRdfXml: function(string, timeStampServer){
        const valuesJson = JSON.parse(string.value);
        const humidity = valuesJson.humidity;
        const id = valuesJson.id;
        const timeStampDevice = valuesJson.timeStampDevice;
        const rdfInXml = `<rdf:RDF
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/">
        <rdf:Device rdf:about="http://198.23.4.33/${id}">
         <dc:humidity>${humidity}</dc:humidity>
         <dc:timedevice>${timeStampDevice}</dc:timedevice>
         <dc:timeserver>${timeStampServer}</dc:timeserver>
        </rdf:Device>
        </rdf:RDF>
        `
        return rdfInXml;
    }
};
