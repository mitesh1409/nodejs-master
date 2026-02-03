// all() vs allSettled()
const promiseOne = new Promise((resolve, reject) =>
    setTimeout(() => resolve('Resolved promiseOne :)'), 1000)
);

const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(() => reject('Rejected promiseTwo :('), 100)
);

const promiseThree = new Promise((resolve, reject) =>
    setTimeout(() => resolve('Resolved promiseThree :)'), 3000)
);

Promise.all([promiseOne, promiseTwo, promiseThree])
    .then((data) => console.log(data))
    .catch((err) => console.log('Failed to resolve a Promise. Error!', err));

Promise.allSettled([promiseOne, promiseTwo, promiseThree])
    .then((data) => console.log('all promises settled!', data))
    .catch((err) => console.log('Failed to resolve a Promise. Error!', err));
