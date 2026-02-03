const promisify = (item, delay) =>
            new Promise((resolve, reject) =>
                setTimeout(() => resolve(item), delay)
            );

const promisifyx = (item, delay) =>
            new Promise((resolve, reject) =>
                setTimeout(() => reject(item), delay)
            );

Promise.all([
        promisify('first', 2000),
        promisifyx('second', 4000)
    ])
    .then((values) => console.log(values))
    .catch(() => console.log('Error!'))
    .finally(() => console.log('this piece of code executes regardless of the Promise status'));

// Another Example

// Following not working in the browser.
// The APIs are correct but we get TypeError: Failed to fetch.
const apis = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4',
];

Promise.all(
        apis.map(api => fetch(api).then(response => response.json()))
    )
    .then(
        (data) => {
            data.forEach(item => console.log(item));

            console.log('1 - ', data[0]);
            console.log('2 - ', data[1]);
            console.log('3 - ', data[2]);
            console.log('4 - ', data[3]);
        }
    )
    .catch(
        err => console.log('Error! ', err)
    )
    .finally(() => console.log('Finally...'));
