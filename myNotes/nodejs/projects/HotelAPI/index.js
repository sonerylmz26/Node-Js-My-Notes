"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.POST || 3000;
const HOST = process.env.HOST || "localhost";

// asyncErrors to errorHandler:
require("express-async-errors");

//DB CONNECTION

//body parser
app.use(express.json());


app.all('/', (req,res) => {
    res.send({
        error: false,
        message: "Welcome to PERSONNEL API",
        // session: req.session,
        // isLogin: req.isLogin,
        user: req.user
    });
})
//ERRORHANDLER
app.use(require('./src/Middlewares/errrorHandler'))
// SERVER LISTEN
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT))


