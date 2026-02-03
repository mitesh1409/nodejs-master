/*
https://www.youtube.com/watch?v=RvYYCGs45L4
JavaScript Promise in 100 Seconds

Consider an example of booking an Uber ride.

Step-1: As soon as the customer request for a ride via Uber App, Uber raises a "Pending" Promise to give customer ride.

Step-2: If a driver is found and he accepts the ride request then Uber "Fulfilled" Promise to give customer ride.

Step-3: In some cases either a driver or a customer may reject the ride request, in that case Uber "Rejected" Promise to give customer ride.

At the end Promise is settled, either "Fulfilled" or "Rejected".
*/

console.log('Started...');

const rideRequest = new Promise((resolve, reject) => {
    // Async code goes here
    // Create a ride request.
    // Find a driver for the requested ride.
    // Check if either driver or customer has rejected the ride request.

    console.log('Promise executor started...');

    // Synchronous
    // let driverArrived = false;

    // if (driverArrived) {
    //     resolve('Driver arrived :) Happy journey!');
    // } else {
    //     reject('Driver denied your ride request! We are sorry :( Please try again.');
    // }

    // Asynchronous
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(jsonResponse => {
            console.log('JSON Response', jsonResponse);
            resolve('Driver arrived :) Happy journey!');
        });

    console.log('Promise executor ended...');
});

console.log('rideRequest', rideRequest);

rideRequest
    .then((data) => {
        console.log('Promise Fulfilled with data = ', data);
    })
    .catch((error) => {
        console.error('Promise Rejected with error!');
        console.error(error);
    })
    .finally(() => {
        console.log('Promise Settled');
    });

console.log('Ended...');
