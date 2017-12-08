const path = require('path')
const express = require('express')
const logfmt = require('logfmt')
const app = express()

app.use(logfmt.requestLogger())

app.use('/', express.static(path.join(__dirname + '/dist')));

app.listen(Number(process.env.PORT || 5000))