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
// cookie- session modulu
const session = require('cookie-session')
//? ------------------------------------------------------- 
//* sessin bir middleware dir . 
//?({
//? icerisine parametreler alir. secret: process.env.SECRET_KEY datayi sifrelemek icin 
//?     maxAge: 1000 * 60 * 60 * 24 * 3 cookiye omur verdik millisaniye cinsinden 
//? 1000 milisaniye = 1 saniye 
//? 1000 * 60 = 1 dakika 
//? 1000 * 60 * 60 = 1 saat
//? 1000 * 60 * 60 * 24 = 1 gun 
//? 1000 * 60 * 60 * 24 * 3 = 3 gun 
//?})
//? ------------------------------------------------------- */
app.use(session({
    secret: process.env.SECRET_KEY,
    // maxAge: 1000 * 60 * 60 * 24 * 3
}))

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
    res.send({
        message: 'WELCOME TO BLOG API',
        session: req.session,
      
      
    })
    // console.log('req:' , req)
    // console.log('****************')
    // console.log('res: ' , res)
})

// continue from here...

/* ------------------------------------------------------- */
// Routes:
app.use('/auth', require('./src/routes/authRouter'))
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