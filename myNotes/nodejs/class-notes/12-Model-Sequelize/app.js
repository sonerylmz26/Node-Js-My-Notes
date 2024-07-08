
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

//* -------------------------------------------------------*//
//Sequlize data:
const { Sequelize, DataTypes } = require('sequelize')

// Connection;
//* const sequelize = new Sequelize('sqlite:(database bulunan adresi)')
// const SQLITE3 = process.env.SQLITE || './db.sqlite3'
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

// Sequlize Model Olusturma:
//*sequlize.define('modelIsmi', {
// olusturacagim sutun ismi

//*})
/* -------------------------------- *

// sequelize.define('tableName', { ...columns })
const Todo = sequelize.define('todos', {
    
    id: {
        type: DataTypes.INTEGER, // DataType // sutun veri tipi.
        allowNull: false, // default: true // sutun verisi boş olabilir mi?
        unique: true, // default: false // benzersiz kayıt mı?
        defaultValue: 0, // Kayıt eklendiğinde default olarak ne yazılsın?
        // autoIncrement: true, // default: false, // Sutun değeri her bir jayıtta otomatik olarak +1 artsın mı?
        // primaryKey: true, // default: false // tablonun her bir kaydını ifade eden benzersiz numara.
        // comment: 'yorum ekleyebiliriz',
        // field: 'custom_field_name'
    },

})

/* -------------------------------- */
/* -------------------------------- */
/* -------------------------------- */

const Todo = sequelize.define('todos', {
id:{
type: DataTypes.INTEGER,
allowNull: false,
unique: true,
defaultValue:'',
comment: 'You can add Comments here ',
primaryKey:true,
autoIncrement:true,
field:'Custom Field Name',

},


})


//*------------------------------------------------------- *//
//*------------------------------------------------------- *//
//*------------------------------------------------------- *//
//*------------------------------------------------------- *//

// continue from here...

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));