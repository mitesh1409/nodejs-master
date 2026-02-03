const request = require('./request');
const response = require('./response');

// Overriding the module function.
request.send = function() {
    console.log('Calling custom send function...');
}

request.send();
