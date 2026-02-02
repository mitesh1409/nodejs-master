// Request timeout = 300 seconds.
const REQUEST_TIMEOUT = 300;

function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

// This outputs the current module data.
// module.exports is empty
// console.log('request module', module);

// Public interface to use this module.
// Modules which are using this module don't need to worry
// about how "encrypt", "send" works.
module.exports = {
    REQUEST_TIMEOUT,
    send
};

// Now module.exports contains "send" function under "send" key
// console.log('request module', module);

console.log('Hello from request.js');
