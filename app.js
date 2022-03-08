const express = require('express')
const app = express()
const route = require('express').Router()


route.get('/',  (req, res) => {
    res.json({
        message: 'Server on port 3000'
    })
})

app.use(route)

app.listen(3000, () => {
    console.log('server on port 3000')
})