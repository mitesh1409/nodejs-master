import express from 'express';

import { home } from '../controllers/home.controller.js';
import { about } from '../controllers/about.controller.js';
import { contact } from '../controllers/contact.controller.js';
import { sendPhoto } from '../controllers/photo.controller.js';

const staticRouter = express.Router();

staticRouter.use((req, res, next) => {
    console.log('Middleware specific to staticRouter...');
    next();
});

staticRouter.get('/', home);
staticRouter.get('/about', about);
staticRouter.get('/contact', contact);
staticRouter.get('/photo', sendPhoto);

export { staticRouter };
