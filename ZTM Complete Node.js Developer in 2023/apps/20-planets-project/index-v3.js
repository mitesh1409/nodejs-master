const fs = require('fs');
const { parse } = require('csv-parse');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

const habitablePlanets = [];

fs.createReadStream('./kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (error) => {
        console.log('Error while reading the file!');
        console.log('Error:', error);
    })
    .on('end', () => {
        console.log('Completed reading the file');
        console.log(`${habitablePlanets.length} habitable planets found!`);
    });
