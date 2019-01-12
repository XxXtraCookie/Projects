const http = require('http');
const query = require('querystring');
const fs = require('fs');
const zlib = require('zlib');
const formidable = require('formidable');

http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      res.write(`
        <form method="POST" enctype="multipart/form-data">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="file" name="upload" />
          <input type="submit" />
        </form>
      `);
      res.end();
    } else if (req.method === 'POST') {
      let form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(fields['username']);
        let uploadFile = files['upload'];
        console.log(uploadFile);
      });
      console.log('Server is fucking on port 2001!');
    }

  })
  .listen(2001);

// const readStream = fs.createReadStream('stream.js');
// const writeStream = fs.createWriteStream('stream.gz');
// const gzip = zlib.createGzip();

// readStream
//   .pipe(gzip)
//   .pipe(writeStream);
