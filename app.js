const express = require('express')
const app = express()
const route = require('express').Router()

//controllers
const {
    getAllNotes
} = require('./controller')

app.use( express.json() )

route.get('/',  (req, res) => {
    const notes = getAllNotes()

    if(notes.length === 0) {
        return res.json( { message: 'No hay notas' } ).status(204)
    }
    
    return res.json( { message: 'ok', notes } ).status(200)

})

app.use(route)

app.listen(3000, () => {
    console.log('server on port 3000')
})