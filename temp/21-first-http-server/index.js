import http from 'node:http';

const port = 3000;
const hostname = '127.0.0.1';

const httpServer = http.createServer((req, res) => {
    // // Return plain text response.
    // const resHeaders = new Headers({
    //     'Content-Type': 'text/plain'
    // });
    // res.setHeaders(resHeaders);
    // res.statusCode = 200;

    // res.end('Hello Node.js HTTP Server!');

    // Return JSON response.
    const resHeaders = new Headers({
        'Content-Type': 'application/json'
    });
    res.setHeaders(resHeaders);
    res.statusCode = 200;

    res.end(JSON.stringify({
        'greetings': 'Hello Node.js HTTP Server!'
    }));
});

httpServer.listen(
    port,
    hostname,
    () => console.log(`Node.js HTTP Server up and running on http://${hostname}:${port}`)
);
