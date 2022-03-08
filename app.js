const express = require('express')
const app = express()
const route = require('express').Router()

//controllers
const {
    getAllNotes, getNote
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

    console.log({note})
    
    if (note === undefined) return res.status(400).json({message: 'nota no encontrada'})
    
    return res.status(200).json( { message: 'nota encontrada', note } )

})

app.use(route)

app.listen(3000, () => {
    console.log('server on port 3000')
})