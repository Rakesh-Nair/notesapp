const fs = require('fs');
const getNotes = () => {
    return "Your Notes";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(data => data.title === title);
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('Note Added');
    }
    else {
        console.log('Note title ' + title + ' already taken');
    }

}



const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};