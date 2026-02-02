function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

// This outputs the current module data.
// console.log(module);

// Public interface to use this module.
// Modules which are using this module don't need to worry
// about how "encrypt" works.
export {
    send
};
