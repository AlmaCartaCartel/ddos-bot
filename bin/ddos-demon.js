'use strict';
require('dotenv').config();
const exec = require('child_process').exec;

module.exports = {
    boot(server) {
        let command = process.env.APP_DDOS_COMAND;

        command = command.replace(/:host/g, server.host);
        command = command.replace(/:port/g, server.port);

        exec(command)
            .stdout.on('data', function(data) {
                    console.log(data);
                });
    }
}