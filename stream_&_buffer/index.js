const fs = require('fs');

const outReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

outReadStream.on('data', (chunk) => {
   console.log(chunk);
});

console.log("hello");
