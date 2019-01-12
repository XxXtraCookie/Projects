const cluster = require('cluster');
const http = require('http');
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.write('Hi!');
    res.end();
  }).listen(1337);
}
