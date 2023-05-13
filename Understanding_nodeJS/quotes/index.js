const fs = require('fs');

const qut = {};

qut.allQut = function () {
   const text = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');
   const arrayOfText = text.split(/\r?\n/);
   return arrayOfText;
};

// console.log(qut.allQut());

module.exports = qut;