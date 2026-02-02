// const axios = require('axios');
import axios from "axios";

// axios.get('https://wwwww.google.com')
//     .then((response) => {
//         console.log('Response: ', response);
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     });

async function getResponse() {
    try {
        const response = await axios.get('https://www.google.com');
        console.log("Response: ", response);
    } catch (error) {
        console.log("Error: ", error);
    }
}

getResponse();
// const response = await getResponse();

console.log('Last line');
