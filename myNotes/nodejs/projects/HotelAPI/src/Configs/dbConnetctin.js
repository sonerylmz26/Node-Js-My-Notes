'use strict';

const mongoose = require('mongoose');

const dbConnection = function () {
    
    mongoose.connect(process.env.MONGODB)
.then(()=> console.log('*** DB CONNECTION *****'))
.catch(console.log('*** DB NOT CONNECTION ****'))
}

module.exports = {
    dbConnection,
    mongoose
}
