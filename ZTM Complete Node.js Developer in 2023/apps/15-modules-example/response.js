function decrypt(data) {
    return `decrypted ${data}`;
}

function read() {
    return decrypt('data');
}

// Public interface to use this module.
// Modules which are using this module don't need to worry
// about how "decrypt" works.
module.exports = {
    read
};

console.log('Hello from response.js');
