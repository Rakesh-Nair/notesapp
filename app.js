const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

//Customize Yargs Version

yargs.version('1.0.1');

//Adding Yargs Command

yargs.command({
    command: 'add',
    describe: 'add a new Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
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

yargs.parse();


