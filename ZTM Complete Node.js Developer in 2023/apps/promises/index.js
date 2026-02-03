// Consider a ride booking system.

console.log('Started...');

const rideRequest = new Promise((resolve, reject) => {
    // Process ride request.
    console.log('Promise executor started...');
    requestAccepted = true;

    if (requestAccepted) {
        resolve('Ride request accepted. Driver on the way...');
    } else {
        reject(new Error('Ride request rejected. Please try again.'));
    }
});

console.log('rideRequest', rideRequest);

rideRequest
    .then(data => console.log('Promise resolved with data', data))
    .catch(error => console.error('Promise rejected with an error', error))
    .finally(() => console.log('Promise settled!'));

console.log('Ended...');
