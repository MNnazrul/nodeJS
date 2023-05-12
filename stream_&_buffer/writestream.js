const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/ouput.txt`);

ourReadStream.on('data', (chunk) => {
   ourWriteStream.write(chunk);
});

