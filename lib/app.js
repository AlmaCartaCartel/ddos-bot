'use strict';
require('dotenv').config();

const fs = require('fs');

let config = fs.readFileSync('./config.json');
config = JSON.parse(config);

const http = require('http');
const ddosDemon = require('../bin/ddos-demon')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

server.listen(process.env.APP_PORT, process.env.APP_ADDRESS, function () {
    console.log('Demon running at http://%s:%d/', process.env.APP_ADDRESS, process.env.APP_PORT);

    config.servers.map((server) => {
        ddosDemon.boot(server);
    })
});