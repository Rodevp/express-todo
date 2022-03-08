const express = require('express')
const app = express()
const route = require('express').Router()

//controllers
const {
    getAllNotes,
    getNote,
    addNote,
    deleteNote
} = require('./controller')

app.use( express.json() )

route.get('/',  (req, res) => {
    const notes = getAllNotes()

    if(notes.length === 0) {
        return res.status(200).json( { message: 'No hay notas' } )
    }
    
    return res.status(200).json( { message: 'ok', notes } )

})


route.get('/:id', (req, res) => {
    const id = Number( req.params.id )
    const note = getNote(id)

    if (note === undefined) return res.status(400).json({message: 'nota no encontrada'})
    
    return res.status(200).json( { message: 'nota encontrada', note } )

})

route.post('/add/', (req, res) => {
    const body = req.body 
    const note = addNote(body)
    return res.json({message: 'creado', note}).status(201)
})

route.delete('/:id', (req, res) => {
    const id = Number( req.params.id )
    const note = deleteNote(id)

    if (note === undefined) return res.status(400).json({message: 'nota no encontrada'})
    
    return res.status(200).json(note)
})



app.use(route)

app.listen(3000, () => {
    console.log('server on port 3000')
})