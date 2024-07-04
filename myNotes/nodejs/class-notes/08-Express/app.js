'use strict';

const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'
console.log(PORT)
// console.log(process.env.PORT)

 app.get('/', (req, res) => {
res.send({message:'Hello'})
 })


app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`))
