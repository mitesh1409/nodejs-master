import { friends } from "../models/friend.model.js";

class Friend {
    constructor() {}

    static all(req, res) {
        res.json(friends);
    }

    static getById(req, res) {
        const friendId = Number(req.params.id);

        if (isNaN(friendId)) {
            res.status(401).json({
                status: 'Failed',
                errors: [
                    'Invalid id',
                ]
            });

            return;
        }

        if (!friends[friendId]) {
            res.status(404).json({
                status: 'Failed',
                errors: [
                    'Record not found',
                ]
            });

            return;
        }

        res.status(200).json({
            status: 'Successful',
            data: friends[friendId],
        });
    }

    static store(req, res) {
        if (!req.body.name) {
            res.status(400).json({
                status: 'Failed',
                errors: [
                    'Name is required',
                ]
            });

            return;
        }

        friends.push({
            id: friends.length,
            name: req.body.name
        });

        res.status(201).json({
            status: 'Successful',
            message: 'Record saved successfully',
        });
    }
}

export { Friend };
