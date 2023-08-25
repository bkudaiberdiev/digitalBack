const fs = require('fs');
const path = require('path');
function getAllCities(req, res) {
    const filePath = path.join(__dirname, "..", 'cities.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).send('Internal Server Error');
        }
    });
}
module.exports = {
    getAllCities
}