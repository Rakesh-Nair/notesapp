const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes');

//Customize Yargs Version

yargs.version('1.0.1');

//Adding Yargs Command

yargs.command({
    command: 'add',
    describe: 'add a new Note',
    handler: function () {
        console.log('Added a New Note');
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new Note',
    handler: function () {
        console.log('Removed a Note');
    }
})

yargs.command({
    command: 'list',
    describe: 'list all Notes',
    handler: function () {
        console.log('lists all Notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'read all Notes',
    handler: function () {
        console.log('reads all Notes');
    }
})
console.log(yargs.argv);


