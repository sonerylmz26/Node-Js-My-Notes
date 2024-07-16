'use strict';

const express = require('express');
const app = express();


//? ************************************************************ */
/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())
//? ************************************************************ */
// AsyncErrors to errorHandler:
require('express-async-errors')
/* ------------------------------------------------------- */
const cors = require('cors');
app.use(cors({origin:'http://localhost:3000'}));
//? ************************************************************ */
const mongoDb = require('./src/dbConnection')
mongoDb()
//? ************************************************************ */
require('dotenv').config()
const PORT = process.env.PORT || 3002;
//? ************************************************************ */
app.get('/', (req,res) => {
  res.send({
    message:'Welcome Todo App with MongoDB'
  })
})



//? ************************************************************ */
//? ************************************************************ */
//? ************************************************************ */
//? ************************************************************ */
const routes = require('./src/routes/toDoRoutes')
app.use('/todo',routes)
//? ************************************************************ */
const errorHandler = require('./src/middlewares/errorHandle')
app.use(errorHandler)
//? ************************************************************ */

app.listen(PORT, () => {
    console.log("Running: http://127.0.0.1:" + PORT)
})
//? ************************************************************ */