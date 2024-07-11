
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

// app.all('/', (req, res) => {
//     res.send('WELCOME TO TODO API')
// })

require('express-async-errors')






//*------------------------------------------------------- *//


//*------------------------------------------------------- *//


//*------------------------------------------------------- *//
app.use(require('../13-Todo_Sequelize_2/app/Routes/toDo.router'))

//*------------------------------------------------------- *//
app.use(require('./app/Middleware/errorHandler'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));