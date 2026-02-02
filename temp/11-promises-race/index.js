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

async function racePromises() {
    const promises = [a(), b(), c()];

    const winner = await Promise.race(promises);

    return `racePromises is done with output ${winner}`;
}

// console.log('racePromises()', racePromises());
// racePromises() returns a Promise in Pending status.

const racePromisesOutput = await racePromises();
console.log('await racePromises() output:', racePromisesOutput);
// await racePromises() returns a result once the Promise is either
// fulfilled or rejected.

// OR

// racePromises()
//     .then(
//         (data) => console.log('racePromises()', data)
//     );

console.log('Last line...');
