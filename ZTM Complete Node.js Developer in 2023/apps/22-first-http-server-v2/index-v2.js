import http from 'node:http';

const port = 3000;
const host = '127.0.0.1';

const friends = [
    {
        id: 0,
        name: 'Nikola Tesla',
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
        id: 2,
        name: 'Albert Einstein',
    }
];

const server = http.createServer((req, res) => {
    const urlItems = req.url.split('/');

    if (req.method === 'POST' &&
        urlItems[1] === 'echo'
    ) {
        // Echoes back data posted in the request.
        req.pipe(res);
    } else if (req.method === 'POST' &&
        urlItems[1] === 'friends'
    ) {
        req.on('data', (data) => {
            console.log('before saving', friends);

            friends.push(
                JSON.parse(data.toString())
            );

            console.log('after saving', friends);

            res.statusCode = 201;
            res.setHeaders(new Headers({
                'Content-Type': 'application/json',
            }));

            res.end(JSON.stringify({
                'status': 'Success',
                'message': 'Record saved successfully'
            }));
        });
    } else if (req.method === 'GET' &&
        urlItems[1] === 'friends'
    ) {
        if (urlItems[3] === undefined) {
            res.statusCode = 200;
            res.setHeaders(new Headers({
                'Content-Type': 'application/json',
            }));

            res.end(JSON.stringify(friends));
        } else {
            if (! friends[Number(urlItems[3])]) {
                res.statusCode = 404;
                res.setHeaders(new Headers({
                    'Content-Type': 'application/json',
                }));

                res.end(JSON.stringify([]));
            } else {
                res.statusCode = 200;
                res.setHeaders(new Headers({
                    'Content-Type': 'application/json',
                }));

                res.end(JSON.stringify(friends[Number(urlItems[3])]));
            }
        }
    } else if (req.method === 'GET' &&
               urlItems[1] === 'plain-text'
    ) {
        res.statusCode = 200;
        res.setHeaders(new Headers({
            'Content-Type': 'text/plain',
        }));

        res.end('Hello Node.js HTTP Server!');
    } else if (req.method === 'GET' &&
               urlItems[1] === 'json'
    ) {
        res.statusCode = 200;
        res.setHeaders(new Headers({
            'Content-Type': 'application/json',
        }));

        res.end(JSON.stringify({
            'message': 'Hello Node.js HTTP Server!'
        }));
    } else if (req.method === 'GET' &&
               urlItems[1] === 'html'
    ) {
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
