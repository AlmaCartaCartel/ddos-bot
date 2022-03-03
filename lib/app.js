'use strict';
require('dotenv').config();

const fs = require('fs');

let config = fs.readFileSync('./config.json');
config = JSON.parse(config);

const ddosDemon = require('../bin/ddos-demon')

config.servers.map((server) => {
    ddosDemon.boot(server);
})