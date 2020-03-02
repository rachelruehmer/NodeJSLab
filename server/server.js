const path = require('path');
const fs = require('fs');
const request = require('request-promise');

let chirp = [{ userName: 'Hallie', message: 'Look at my pen!' },
 { userName: 'Dustin', message: 'I like to go vroom vroom!' },
{ userName: 'Nyya', message: 'Still I rise.' }, 
{ userName: 'Seth', message: 'I want a dog. But not really.' }, 
{ userName: 'Anna', message: 'I love fandoms.' }]

let dataPath = path.join(__dirname, '../chirps.json');

fs.writeFile(dataPath, JSON.stringify(chirp), err => {
    if (err) {
        return console.log(err)
    }

});

