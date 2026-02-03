// With regular functions.
// This code is useful to understand the execution flow on https://www.jsv9000.app/.

// const resolvedPromise = new Promise(function resolvePromiseExecutor(resolve, reject) {
//     if (true) {
//         resolve('Promise resolved :)');
//     } else {
//         reject('Something went wrong!');
//     }
// });

// const rejectedPromise = new Promise(function rejectPromiseExecutor(resolve, reject) {
//     if (false) {
//         resolve('Promise resolved :)');
//     } else {
//         reject('Something went wrong!');
//     }
// });

// resolvedPromise
//     .then(function resolvedPromiseCallback1(result) {
//         console.log(result + ' [1]');

//         return result;
//     })
//     .then(function resolvedPromiseCallback2(result) {
//         console.log(result + ' [2]');

//         return result;
//     })
//     .then(function resolvedPromiseCallback3(result) {
//         throw Error;

//         // return result + ' [3]';

//         // some code...
//     })
//     .catch(function resolvedPromiseCallback4() {
//         console.log('Error! in resolvedPromise')
//     })
//     .then(function resolvedPromiseCallback5() {
//         console.log('Executes after catch - resolvedPromise')
//     });

// rejectedPromise
//     .then(function rejectedPromiseCallback1(result) {
//         console.log(result + ' [1]');

//         return result;
//     })
//     .then(function rejectedPromiseCallback2(result) {
//         console.log(result + ' [2]');

//         return result;
//     })
//     .catch(function rejectedPromiseCallback3(result) {
//         console.log('Error! in rejectedPromise', result)
//     })
//     .then(function rejectedPromiseCallback4() {
//         console.log('Executes after catch - rejectedPromise')
//     });

// With anonymous arrow functions.

const resolvedPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Promise resolved :)');
    } else {
        reject('Something went wrong!');
    }
});

const rejectedPromise = new Promise((resolve, reject) => {
    if (false) {
        resolve('Promise resolved :)');
    } else {
        reject('Something went wrong!');
    }
});

resolvedPromise
    .then((result) => {
        console.log(result + ' [1]');

        return result;
    })
    .then((result) => {
        console.log(result + ' [2]');

        return result;
    })
    .then((result) => {
        throw Error;

        // return result + ' [3]';

        // some code...
    })
    .catch(() => console.log('Error! in resolvedPromise'))
    .then(() => console.log('Executes after catch - resolvedPromise'));

rejectedPromise
    .then((result) => {
        console.log(result + ' [1]');

        return result;
    })
    .then((result) => {
        console.log(result + ' [2]');

        return result;
    })
    .catch((result) => console.log('Error! in rejectedPromise', result))
    .then(() => console.log('Executes after catch - rejectedPromise'));
