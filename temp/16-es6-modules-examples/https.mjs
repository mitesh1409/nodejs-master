// Use object destructuring to read and assign the variables/methods from the module.
import { send } from './request.mjs';
import { read } from './response.mjs';

function doRequest(url, data) {
    send(url, data);

    return read();
}

const responseData = doRequest('https://www.google.com', 'Hello');
console.log(responseData);
