const path = require('path')
const mongoose = require('mangoose')
const express = require('express')
const { PORT = 3000 } = process.env

const app = express()

mongoose.connect('mongodb://localhost:27017/parrots', {
    useNewUrlParser: true,
})

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.listen( PORT, () => {
    console.log('serv is ok')
})

