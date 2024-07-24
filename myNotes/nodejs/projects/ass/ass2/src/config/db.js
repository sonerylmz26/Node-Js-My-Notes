'use strict';

/* -------------------------------------------------------
      EXPRESSJS - PRODUCTAPI Project with Mongoose / mongodb
------------------------------------------------------- */


const mongoose = require('mongoose');

const dbConnection = () => {
  
    mongoose.connect(process.env.MONGODB_CONNECTION || 'mongodb://localhost:27017/productsApi')
    .then(() => console.log('*** DB Connect ***'))
    .catch(() => console.log('*** DB Not Connected ***'));
}
module.exports = dbConnection;