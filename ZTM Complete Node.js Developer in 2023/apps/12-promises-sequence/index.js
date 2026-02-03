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

async function sequencialPromises() {
    const output1 = await a(); // first this
    const output2 = await b(); // then this
    const output3 = await c(); // then this

    return `sequencialPromises is done with output ${output1}, ${output2}, ${output3}`;
}

// console.log('sequencialPromises()', sequencialPromises());
// sequencialPromises() returns a Promise in Pending status.

const sequencialPromisesOutput = await sequencialPromises();
console.log('await sequencialPromises() output >>', sequencialPromisesOutput);
// await sequencialPromises() returns a result once the Promise is either
// fulfilled or rejected.

// sequencialPromises()
//     .then(
//         (data) => console.log('sequencialPromises() output >>', data)
//     );

console.log('Last line...');
