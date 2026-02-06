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

/**
## Order of Execution (Node.js – `https.get`)

### Phase 1 – Synchronous code execution

#### Step #1

* Script is loaded
* Global Execution Context (GEC) is created
* `https` module is loaded
* `get` is imported

#### Step #2

* `https.get()` is called
* Creates a `ClientRequest`
* Opens a **non-blocking TCP socket**
* Registers internal listeners with libuv
* Returns immediately

At this point:

* Call Stack is empty
* No callbacks are executed yet

---

### Phase 2 – Asynchronous execution (Event-driven)

#### Step #1

* Node.js enters the **Event Loop**
* libuv waits for events from the **OS kernel** (network I/O)
* Node.js is idle until data is available

#### Step #2

* When HTTP response headers are received:

  * The `get` callback is executed (Poll phase)
  * `res` (readable stream) is available
  * Event listeners for `"data"` and `"end"` are registered

#### Step #3

* As response data arrives:

  * `"data"` event is emitted multiple times
  * Corresponding callbacks are executed in order

#### Step #4

* After the last chunk:

  * `"end"` event is emitted
  * `"end"` callback is executed

#### Step #5

* No pending timers, I/O, or active handles
* Event Loop exits
* Application terminates

 */
