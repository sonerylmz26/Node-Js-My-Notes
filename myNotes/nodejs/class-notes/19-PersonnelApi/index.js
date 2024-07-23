"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose@latest express-async-errors
    mongoose@latest => en guncel hali
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require("express");
const {dbConnection} = require("./src/configs/dbConnection");
const app = express();


require('dotenv').config()
const PORT = process.env.PORT || 8000;

require('express-async-errors')
const findSearchSortPage = require('./src/middlewares/findSearchSortPage')
app.use(findSearchSortPage)
app.use(express.json())

/* ------------------------------------------------------- */

// continue from here...



/* ------------------------------------------------------- */
//mongoDb connect
dbConnection()
/* ------------------------------------------------------- */


app.use('/departments',require('./src/routes/department.router'))


// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()
