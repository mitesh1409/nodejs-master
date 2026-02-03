const aPromise = new Promise(function(resolve, reject) {
    const status = 'fulfilled';

    if (status === 'fulfilled') {
        // this is sync
        // resolve('success :)');

        // this is async
        setTimeout(resolve, 10000, 'success :)');
    }

    if (status === 'rejected') {
        // this is sync
        // reject(new Error('failure! :('));

        // this is async
        setTimeout(reject, 10000, new Error('failure! :('));
    }
});

console.log('aPromise', aPromise);

aPromise.then((data) => console.log('fulfilled with data = ', data))
    .catch((error) => console.log('rejected with an error', error))
    .finally(() => console.log('promise settled'));
