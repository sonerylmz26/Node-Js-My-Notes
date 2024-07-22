'use strict';

const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();
const PORT =process.env.PORT || 3001
require('express-async-errors')

app.all('/', (req,res) => {
  res.status(200).send('Welcome to Ass-2')
})






app.use(require('./src/middlewares/errorHandlers'))
app.listen(PORT, () => {
    console.log('Running: http://127.0.0.1:' + PORT)
})