const fs = require('fs');
const { parse } = require('csv-parse');

const fileData = [];

fs.createReadStream('./kepler_data.csv')
    .on('open', () => {
        console.log('file descriptor is opened');
    })
    .on('ready', () => {
        console.log('file descriptor is ready to be used');
    })
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (chunk) => {
        fileData.push(chunk);
        console.log('chunk:', chunk);
        console.log('\n\n');
    })
    .on('error', (error) => {
        console.log('Error while reading the file!');
        console.log('Error:', error);
    })
    .on('end', () => {
        console.log('Completed reading the file');
        console.log('file data:', fileData);
        console.log('number of elements in the file data:', fileData.length);
    })
    .on('close', () => {
        console.log('file descriptor is closed');
    });
