'use strict';

const {connect} = require('mongoose');

const dbConnection = () => {

connect(process.env.MONGODB || 'mongodb://localhost:27017/TodoAPI')
.then(() => console.log('* DB Connected.'))
.catch(() => console.log('* DB Not Connected.'))


}

module.exports = dbConnection