const express = require('express')
const db = require('./database')
const router = require('./router')
const { adminMiddleware, authenticationMiddleware } = require('./middlewares')

const app = express()

app.set('db', db);

app.use(express.json());

app.use(adminMiddleware);
app.use(authenticationMiddleware);

app.use(router);

app.listen(process.env.PORT || '8080')
