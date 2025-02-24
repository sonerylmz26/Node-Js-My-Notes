'use strict';


/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose ODM
// $ npm i mongoose

const mongoose = require('mongoose');

const dbConnection = () => {
  
// mongoose.connect('mongodb://localhost:27017/')
mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/')
.then(() => console.log('* DB Connected.'))
.catch(() => console.log('* DB Not Connected.'))
}

module.exports = dbConnection