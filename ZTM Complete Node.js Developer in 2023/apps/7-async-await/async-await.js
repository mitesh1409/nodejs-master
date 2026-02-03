// Example #1

// Using Promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((jsonResponse) => console.log('Using Promise', jsonResponse));

// Using aync await
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonResponse = await response.json();
    console.log('Using async-await', jsonResponse);
}

fetchUsers();

console.log('Last line...');

// // Example #2

// // Using Promise
// const profileMockApis = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/comments'
// ];

// Promise.all(
//         profileMockApis.map(
//             (mockApi) => 
//                 fetch(mockApi)
//                     .then((response) => {
//                         if (response.status !== 200) {
//                             throw Error;
//                         }

//                         return response.json();
//                     })
//         )
//     )
//     .then((values) => {
//         console.log(values);
//         console.log('users', values[0]);
//         console.log('posts', values[1]);
//         console.log('comments', values[2]);
//     })
//     .catch(() => console.log('Error!'));

// // Using aync await
// async function getData() {
//     try {
//         const [ users, posts, comments ] = await Promise.all(
//             profileMockApis.map(
//                 (mockApi) => fetch(mockApi).then((response) => {
//                     if (response.status !== 200) {
//                         throw Error(`API response status ${response.status}`);
//                     }

//                     return response.json();
//                 })
//             )
//         );

//         console.log('users', users);
//         console.log('posts', posts);
//         console.log('comments', comments);
//     } catch (err) {
//         console.error('Error while fetching data', err);
//     }
// }

// getData();

// // Using for await
// async function getDataV2() {
//     const promises = profileMockApis.map((api) => fetch(api));

//     for await (let response of promises) {
//         const jsonResponse = await response.json();
//         console.log('response', jsonResponse);
//     }
// }

// getDataV2();

// console.log('Last line...');
