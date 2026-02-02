// V1, using HTTP module
// const http = require('http');

// const request = http.request('http://www.google.com', (res) => {
//     res.on('data', (dataChunk) => {
//         console.log(`DATA CHUNK: ${dataChunk}`);
//         console.log('\n\n');
//     });

//     res.on('end', () => {
//         console.log('No more data!');
//     });
// });

// request.end();


// V2, using HTTPS module
// const https = require('https');

// const url = 'https://jsonplaceholder.typicode.com/users';
// const url = 'https://www.google.com';

// const request = https.request(url, (res) => {
//     res.on('data', (dataChunk) => {
//        console.log(`DATA CHUNK: ${dataChunk}`);
//        console.log('\n\n');
//     });

//     res.on('end', () => {
//         console.log('No more data!');
//     });
// });

// request.end();


// V3, using the "get" function from the HTTPS module.
const { get } = require('https');

get('https://www.google.com', (res) => {
    res.on('data', (dataChunk) => {
        console.log(`DATA CHUNK: ${dataChunk}`);
        console.log('\n\n');
    });

    res.on('end', () => {
        console.log('No more data!');
    });
});
