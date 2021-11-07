const express = require('express')
const db = require('./database')
const Author = require('./models/Author')

const app = express()

app.set('db', db);

app.get('*', (req,res) => {
  res.send('Hello World')
})


app.listen(process.env.PORT || '8080')
