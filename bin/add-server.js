'use strict';
if (!process.argv[2]) {
    throw new Error('First param is required!')
}

const host = process.argv[2];
const port = !!process.argv[3] ? process.argv[3] : 80;

const config = require('./config.js')

config.append('servers', {
    host,
    port
})