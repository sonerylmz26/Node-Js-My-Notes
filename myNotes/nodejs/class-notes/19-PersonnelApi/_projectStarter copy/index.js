"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require('express')
const app = express()
app.use(express.json())


require('dotenv').config()
const PORT = process.env.PORT || 8002
/* ------------------------------------------------------- */
require('express-async-errors');

const { mongoose,
    dbConnection } = require('./src/configs/dbConnection')
    dbConnection()

// continue from here...
/* ------------------------------------------------------- */
app.all('/', (req,res) => {
  res.status(202).send({
   
error : false,
message:'Welcome to PERSONALAPI'
  })
})

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()