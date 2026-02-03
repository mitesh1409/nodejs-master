const aResolvedPromise = (item, delay) =>
            new Promise((resolve, reject) =>
                setTimeout(
                    () => resolve(item), delay
                )
            );

const aRejectedPromise = (item, delay) =>
            new Promise((resolve, reject) =>
                setTimeout(
                    () => reject(item), delay
                )
            );

const a = () => aResolvedPromise('aa', 1000);
const b = () => aResolvedPromise('bb', 2000);
const c = () => aResolvedPromise('cc', 3000);

async function parallelPromises() {
    const promises = [a(), b(), c()];

    try {
        const [output1, output2, output3] = await Promise.all(promises);
        return `parallelPromises is done with output ${output1}, ${output2}, ${output3}`;
    } catch (err) {
        console.log('Error: ', err);
        return err;
    }
}

// Example-1
// console.log('parallelPromises()', parallelPromises());
// // parallelPromises() returns a Promise in Pending status.
// // async function when called without await, returns a Promise in pending status.
// // This is asynchronous execution.

// console.log('Last line...');

// // Example-2
// const parallelPromisesOutput = await parallelPromises();
// console.log('await parallelPromises() output >>', parallelPromisesOutput);
// // await parallelPromises() returns a result once the Promise is either
// // fulfilled or rejected.
// // async function when called with await, returns a result once the Promise is either
// // fulfilled or rejected.
// // This is synchronous execution.

// console.log('Last line...');

// Example-3
parallelPromises()
    .then(
        (data) => console.log('parallelPromises output >>', data)
    );

console.log('Last line...');
