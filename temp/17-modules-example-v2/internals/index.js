// V1
module.exports = {
    request: require('./request'),
    response: require('./response')
};

// V2
// const request = require('./request');
// const response = require('./response');
// module.exports = {
//     REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//     send: request.send,
//     read: response.read
// };

// V3
// module.exports = {
//     ...require('./request'),
//     ...require('./response'),
// };
