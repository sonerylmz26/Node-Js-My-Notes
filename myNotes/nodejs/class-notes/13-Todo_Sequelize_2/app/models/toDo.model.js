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


    /* -------------------------------- *
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
/* -------------------------------- */
/* -------------------------------- */
title:{
type: DataTypes.STRING(256),
allowNull:false,

},
description: DataTypes.TEXT,
// description:{

// },
priority:{
    // 1:High , 0:Normal, -1:Low
    type: DataTypes.TINYINT,
    allowNull:false,
    defaultValue:0,
},
isDone:{
type:DataTypes.BOOLEAN,
allowNull:false,
defaultValue:false,
},

// createAt:{},updateAt:{}, bunlari otomatik yapiyor.


})
// sequelize.sync();
// sequelize.sync({force:true})
//  sequelize.sync({alter:true});

sequelize.authenticate()
.then(()=> console.log('** DB CONNECTED ***'))
.catch(()=> console.log('** DB not CONNECTED ***'))
//*------------------------------------------------------- *//
//*------------------------------------------------------- *//
//*------------------------------------------------------- *//
//*------------------------------------------------------- *//
 
//*------------------------------------------------------- *//
// MODULE EXPORT
module.exports = Todo