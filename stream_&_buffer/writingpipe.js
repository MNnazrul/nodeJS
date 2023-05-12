const http = require('http');
const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/ouput.txt`);
// ourReadStream.pipe(ourWriteStream);

const server = http.createServer((req, res) => {
   const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
   myReadStream.pipe(res);
});

server.listen(3000);

