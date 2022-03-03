'use strict';
require('dotenv').config();
const spawn = require('child_process').spawn;

module.exports = {
    boot(server) {
        let command = process.env.APP_DDOS_COMAND;

        command = command.replace(/:host/g, server.host);
        command = command.replace(/:port/g, server.port);

        spawn(command)
    }
}