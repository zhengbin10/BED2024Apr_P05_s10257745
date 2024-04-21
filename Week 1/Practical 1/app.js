const http = require('http');
const hostname = 'localhost';
const port = 3030;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello WORLD ! ');
});

// Node.js File Path
const path = require('node:path');

const notes = './notes.txt';

path.dirname(notes); // ./
path.basename(notes); // notes.txt
path.extname(notes); // .txt

// Reading File
const fs = require('node:fs');

fs.readFile('./notes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Writing File
const content = 'Writing some content here!';

fs.writeFile('./notes.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

//color the output
const chalk = require('chalk');

console.log(chalk.yellow('hello!'));

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
