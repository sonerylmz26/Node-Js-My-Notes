# Nodejs Projects

List of projects within Nodejs workshop as follows;

npm init -y
npm i express dotenv express-async-errors
npm install mongoose

const express = require('express');
const app = express();

app.use(express.json())

//? ************************************************************ */
const mongoDb = require('./src/dbConnection')
mongoDb()
//? ************************************************************ */
require('dotenv').config()
const PORT = process.env.PORT || 3002;
//? ************************************************************ */

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017')


//? ************************************************************ */
app.listen(PORT, () => {
    console.log("Running: http://127.0.0.1:" + PORT)
})
//? ************************************************************ */