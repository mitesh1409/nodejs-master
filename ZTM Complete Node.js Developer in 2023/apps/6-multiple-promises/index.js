// Multiple promises.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Promise One');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Promise Two');
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Promise Three');
    // setTimeout(reject, 3000, 'Promise Three');
});

Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch(() => console.log('Error!'))
    .then(() => console.log('After catch...'))
    .finally(() => console.log('Finally...'));

// One more example.
const profileMockApis = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    // 'https://jsonplaceholder.typicod.com/comments' // invalid URL
];

console.log(
    'Promises for the mock APIs',
    profileMockApis.map((mockApi) => fetch(mockApi))
);

Promise.all(
        profileMockApis.map(
            (mockApi) => fetch(mockApi).then((response) => response.json())
        )
    )
    .then((values) => console.log(values))
    .catch(() => console.log('Error!'))
    .finally(() => console.log('this piece of code executes regardless of the Promise status'));
