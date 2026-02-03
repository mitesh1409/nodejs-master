const request = require('./request');
const response = require('./response');

function doRequest(url, data) {
    request.send(url, data);

    return response.read();
}

const responseData = doRequest('https://www.google.com', 'Hello');
console.log('Response: ', responseData);
