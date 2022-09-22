const jsonfile = require('jsonfile');

const config = jsonfile.readFileSync('./config.json')
console.log(config);

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
});

server.listen(config.server.port, config.server.hostname, () => {
    console.log(`Server running at http://${config.server.hostname}:${config.server.port}/`);
});
