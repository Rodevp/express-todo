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

const updateNote = (id, newData) => {

    const find = data.findIndex(note => note.id === id)
    
    if (find === -1) return undefined

    data.splice(find, 1, newData)

    return {
        message: 'Editado'
    }

}


module.exports = {
    addNote,
    deleteNote,
    updateNote,
    getAllNotes,
    getNote
}