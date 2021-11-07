const express = require('express')
const db = require('./database')
const Author = require('./models/Author')
const router = require('./router')

const app = express()

app.set('db', db);

app.use(router);

app.listen(process.env.PORT || '8080')
