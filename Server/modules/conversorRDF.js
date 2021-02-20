module.exports = {

    ConvertToRdfXml: function(variableName, message){
        const valuesJson = JSON.parse(message.value);
        const variableValue = valuesJson.variableValue;
        const id = valuesJson.id;
        const timeStampDevice = valuesJson.timeStampDevice;
        const timeStampServer = Date.now();
        const rdfInXml = `<rdf:RDF
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/">
        <rdf:Device rdf:about="http://198.23.4.33/${id}">
         <dc:${variableName}>${variableValue}</dc:${variableName}>
         <dc:timedevice>${timeStampDevice}</dc:timedevice>
         <dc:timeserver>${timeStampServer}</dc:timeserver>
        </rdf:Device>
        </rdf:RDF>
        `
        return rdfInXml;
    }
};
