import http from 'node:http';

const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
    if (req.url === '/plain-text') {
        res.statusCode = 200;
        res.setHeaders(new Headers({
            'Content-Type': 'text/plain',
        }));

        res.end('Hello Node.js HTTP Server!');
    } else if (req.url === '/json') {
        res.statusCode = 200;
        res.setHeaders(new Headers({
            'Content-Type': 'application/json',
        }));

        res.end(JSON.stringify({
            'message': 'Hello Node.js HTTP Server!'
        }));
    } else if (req.url === '/html') {
        res.statusCode = 200;
        res.setHeaders(new Headers({
            'Content-Type': 'text/html',
        }));

        res.write('<html>');
        res.write('<head>');
        res.write('<title>Node.js HTTP Server</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Hello Node.js HTTP Server!</h1>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    } else {
        // Fallback to 404 response.
        res.statusCode = 404;
        res.setHeaders(new Headers({
            'Content-Type': 'text/plain',
        }));

        res.end('404 Not Found');
    }
});

server.listen(
    port,
    host,
    () => console.log(`Server up and running at http://${host}:${port}`)
);
