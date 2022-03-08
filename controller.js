const data = [];

const getAllNotes = () => {
    return data
}

const getNote = (id) => {
    const note = data.find(note => note.id === id)
    return note
}

const addNote = (note) => {
    data.push(note)
    return {
        message: 'nota creada',
        note 
    }
}

const deleteNote = (id) => {
    const find = data.findIndex(note => note.id === id)
    
    if (find === -1) return undefined
    
    data.splice(find, 1)

    return {
        message: 'Eliminado'
    }

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