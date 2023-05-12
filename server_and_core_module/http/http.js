const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url == '/') {
      res.write('Alhamdulillah..');
      res.write('bismillah');
      res.end();
   } else if(req.url == '/about') {
      res.write('this is learning page');
      res.write('lear with sumit');
      res.end();
   } else {
      res.write('not found');
      res.end();
   }
});

server.listen(3000);
console.log('listening on port 3000');