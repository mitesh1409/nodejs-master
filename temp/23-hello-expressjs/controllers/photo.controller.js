import { fileURLToPath, URL } from 'node:url';

function sendPhoto(req, res) {
    const photoUrl = new URL('../public/images/skimountain.jpg', import.meta.url);
    res.sendFile(fileURLToPath(photoUrl));
}

export { sendPhoto };
