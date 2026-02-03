const EventEmitter = require('events');

// Subject - Celebrity Keanu Reeves will emit events about his life/movies.
const keanuReeves = new EventEmitter();

// Emitting events before registering listeners.
// Here listeners won't be called.

// // There are two observers for this event.
// keanuReeves.emit('John Wick Trailer Launch Event');
// // No observers for this event.
// keanuReeves.emit('At Cannes Film Festival');
// // There are two observers for this event.
// keanuReeves.emit('John Wick Trailer Launch Event');

// Observer - Observer 1 subscribed to Keanu Reeves > John Wick Trailer Launch Event.
keanuReeves.on(
    'John Wick Trailer Launch Event',
    () => {
        console.log('Congratulations!');
    }
);

// Observer - Observer 2 subscribed to Keanu Reeves > John Wick Trailer Launch Event.
keanuReeves.on(
    'John Wick Trailer Launch Event',
    () => {
        console.log('Trailer is awesome ;) Very much excited for the movie!');
    }
);

// Emitting events after registering listeners.
// Listeners will be called one by one, synchronously, in the order they were registered.

// There are two observers for this event.
keanuReeves.emit('John Wick Trailer Launch Event');
// No observers for this event.
keanuReeves.emit('At Cannes Film Festival');
// There are two observers for this event.
keanuReeves.emit('John Wick Trailer Launch Event');

// process.on('beforeExit', (code) => {
//     console.log('Process beforeExit event with code: ', code);
// });

// process.on('exit', (code) => {
//     console.log('Process exit event with code: ', code);
// });

// // A racer will emit events about his race.
// const aRacer = new EventEmitter();

// // A fan subscriber.
// aRacer.on(
//     'Race',
//     (result) => {
//         if (result === 'win') {
//             console.log('Well done! Congratulations! :)');
//         } else {
//             console.log('Well tried! Better luck next time! :(');
//         }
//     }
// );

// // A critic subscriber.
// aRacer.on(
//     'Race',
//     (result) => {
//         if (result === 'win') {
//             console.log('Boo! I could have done better than that! ;)');
//         } else {
//             console.log('Not enough! Go get some training! ;)');
//         }
//     }
// );

// aRacer.emit('Race', 'win');
// aRacer.emit('Race', 'lose');

console.log('Last line...');
