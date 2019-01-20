const fs = require('fs');
const dataBase = require('../database/database');

module.exports = (req, res) => {
  if (req.path === '/') {
    fs.readFile('./index.html', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const images = dataBase.getAll();
      let result = '';

      result += '<ul>';

      for (let i = 0; i < images.length; i++) {
        let image = images[i];
        result += `
          <li>
            <a href="/images/details/${i}">${image.name}</a>
          </li>
        `
      }

      result += '</ul>';

      data = data.replace('{{content}}', result);

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      res.write(data);
      res.end();
    });
  } else {
    return true;
  }
}
