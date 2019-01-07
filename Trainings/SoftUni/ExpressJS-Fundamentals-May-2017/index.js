const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 6001;
const faviconPath = '/favicon.ico';

http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === '/') {
    fs.readFile('./index.html', (err, data) => {
      2
      if (err) {
        console.log(err);
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      res.write(data);
      res.end();
    });
  } else if (path === faviconPath) {
    fs.readFile('.' + faviconPath, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      res.writeHead(200);
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('.' + path, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write('404 Not Found');
        res.end();
        return;
      }
      res.writeHead(200);
      res.write(data);
      res.end();
    });
  }
}).listen(port);

console.log(`Server listening on port ${port}`);
