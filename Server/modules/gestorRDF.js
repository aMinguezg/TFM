module.exports = {

    ConvertToRdfXml: function(string){
        const valuesJson = JSON.parse(string.value);
        const temperature = valuesJson.temperature;
        const humidity = valuesJson.humidity;
        const rdfInXml = `<rdf:RDF
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/">
        <rdf:Device rdf:about="http://198.23.4.33/8493837">
         <dc:temperature>${temperature}</dc:temperature>
         <dc:humidity>${humidity}</dc:humidity>
        </rdf:Device>
        </rdf:RDF>
        `
        return rdfInXml;
    }
};
