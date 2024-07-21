"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
require('express-async-errors')
/* ------------------------------------------------------- */

app.use(express.json())
/* ------------------------------------------------------- */
// DB CONNECTION:
// const dbConnection = require('./src/dbConnection')
// dbConnection()
require('./src/dbConnection')()

/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})

// continue from here...

/* ------------------------------------------------------- */
// Routes:
app.use('/auth', require('./src/routes/authRoute'))
app.use('/blog', require('./src/routes/blogRouter'))
app.use('/user', require('./src/routes/userRouter'))

/* ------'------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */




/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
// Catch Errors:
app.use(require('./src/errorHandlers'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))