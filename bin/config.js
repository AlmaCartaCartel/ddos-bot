'use strict';
const fs = require('fs');

let config = fs.readFileSync('./config.json');

module.exports = {
    config: JSON.parse(config),
    fs,

    get (name) {
        return this.config[name];
    },

    set (name, val) {
        this.config[name] = val;
        this.save();
    },

    append (name, val) {
        this.config[name].push(val);
        this.save();
    },

    save () {
        this.fs.writeFile('./config.json', JSON.stringify(this.config), err => {
            if (err) {
                console.error(err)
                return;
            }
        })
    }
}