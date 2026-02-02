// Synchronous race
console.log('Synchronous race');

console.log('🐇 finished!');

console.log('🐢 finished!');


// Asynchronous race
console.log('Asynchronous race');

setTimeout(
    () => console.log('🐇 finished!'),
    1000 // rabbit is sleeping ;)
);

console.log('🐢 finished!');
