const data = [];

const getAllNotes = () => {
    return data
}

const getNote = (id) => {
    const note = data.find(note => note.id === id)
    return note
}

const addNote = () => {

}

const deleteNote = () => {

}

const updateNote = () => {

}

const createNote = () => {

}


module.exports = {
    addNote,
    deleteNote,
    updateNote,
    createNote,
    getAllNotes,
    getNote
}