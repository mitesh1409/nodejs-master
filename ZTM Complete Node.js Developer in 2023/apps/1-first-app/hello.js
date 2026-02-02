const mission = process.argv[2] !== undefined ? process.argv[2] : 'Nothing';
// OR
// const mission = process.argv[2] ?? 'Nothing';

console.log(process.argv);

if (mission === 'Node.js') {
    console.log('Write some Node.js code!');
} else {
    console.log(`Is ${mission} really more fun?`);
}
