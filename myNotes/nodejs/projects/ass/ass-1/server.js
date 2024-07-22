'use strict';

/* ------------------------------------------------------- */
const express = require('express');
const cors = require('cors');
const app = express();
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
require('dotenv').config();
const PORT = process.env.PORT || 3001
/* ------------------------------------------------------- */

app.use(cors());
/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())

// AsyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */







/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
app.use(require('./app/routes/bookRoute.js'))
/* ------------------------------------------------------- */
//? Error Handler
app.use(require('./app/middlewares/errorHandler.js'))
/* ------------------------------------------------------- */
app.listen(PORT, ()=>{
    console.log("Running: http://127.0.0.1:" + PORT)
})









