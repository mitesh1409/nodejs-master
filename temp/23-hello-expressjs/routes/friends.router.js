import express from 'express';

import { Friend } from '../controllers/friend.controller.js';

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('Middleware specific to friendsRouter...');
    next();
});

// Get all the friends.
friendsRouter.get('/', Friend.all);

// Get a friend by id.
friendsRouter.get('/:id', Friend.getById);

// Create a friend.
friendsRouter.post('/', Friend.store);

export { friendsRouter };
