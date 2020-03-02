const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let dataPath = path.join(__dirname, './popular-articles.json');

rp('https://reddit.com/r/popular.json', (err, res, body) => {

    JSON.parse(body).data.children.forEach(reddit => {
        fs.appendFileSync(dataPath, `${reddit.data.title}, ${reddit.data.url}, ${reddit.data.author} + /n`)
    })
  
})