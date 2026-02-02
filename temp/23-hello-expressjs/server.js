import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { greetings } from './controllers/greetings.controller.js';
import { friendsRouter } from './routes/friends.router.js';
import { staticRouter } from './routes/static.router.js';
import { mission } from './controllers/mission.controller.js';

const app = express();
const PORT = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
const requestLogger = (req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Params: ${req.params}`);
    console.log(`Request Body: ${req.body}`);
    console.log(`Request Headers: ${req.headers}`);

    next();
};

const requestTimer = (req, res, next) => {
    const startTime = Date.now();

    next();

    const delta = Date.now() - startTime;
    console.log(`Request took ${delta}ms`);
};

app.use(requestTimer);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
app.use(requestLogger);

app.use('/', staticRouter);
app.get('/api/greetings', greetings);
app.use('/api/friends', friendsRouter);
app.get('/mission', mission);

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});
