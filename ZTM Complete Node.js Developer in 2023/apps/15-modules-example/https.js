// const request = require('./request');
// const response = require('./response');

// function doRequest(url, data) {
//     request.send(url, data);

//     return response.read();
// }

// Use object destructuring to read and assign the variables/methods from the module.
const { send } = require('./request');
const { REQUEST_TIMEOUT } = require('./request');
const { read } = require('./response');

// Check the application cache to get idea about the loaded modules.
// console.log('require.cache: ', require.cache);

function doRequest(url, data) {
    send(url, data);

    return read();
}

const responseData = doRequest('https://www.google.com', 'Hello');
console.log('Response: ', responseData);
