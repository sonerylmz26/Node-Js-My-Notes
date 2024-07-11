
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

// app.all('/', (req, res) => {
//     res.send('WELCOME TO TODO API')
// })

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
const router = express.Router()

// CRUD: Create Read Update Delete

// CREATE TODO:

router.post('/', async (req, res) => {

    // const receivedData = req.body
    // // console.log(receivedData)

    // const data = await Todo.create({
    //     title: receivedData.title,
    //     description: receivedData.description,
    //     priority: receivedData.priority,
    //     isDone: receivedData.isDone
    // })
    // // console.log(data)

    const data = await Todo.create(req.body)
    // console.log(data)

    res.status(201).send({
        error: false,
        result: data.dataValues
    })

})
// READ TODO:

router.get('/', async (req, res) => {
     const data = await Todo.findAll()
    // const data = await Todo.findByPk(req.params.id)
    res.status(200).send({
        error: false,
        result: data,
        
    })
   
});


// UPDATE TODO:
router.put('/:id', async (req, res) => {
    // const data = await Todo.update({ ...newData }, { ...filter })
    const data = await Todo.update(req.body , { where: { id: req.params.id } })
// console.log(data)
res.status(202).send({
    error: false,
    result: data,
    message: (data[0] >= 1 ? 'Updated' : 'Can not Updated.'),
    new: await Todo.findByPk(req.params.id) // Güncellenmiş kaydı göster.
})


});

// DELETE TODO:

router.delete('/:id', async (req, res) =>{
    // const data = await Todo.destroy({ ...filter })

const data = await Todo.destroy({ where: { id: req.params.id } })
// console.log(data)

//  res.status(204).send({
//      error: false,
//      result: data,
//      message: (data >= 1 ? 'Deleted.' : 'Can not Deleted.'),
//  })

if (data >= 1) {
    // Deleted:
    // res.status(200).send({
    //     error: false,
    //     result: data,
    //     message: 'Deleted'
    // })

    // Sadece statusCode çıktısı ver:
    res.sendStatus(204)

} else {
    // Not Deleted:
    // res.status(404).send({
    //     error: true,
    //     result: data,
    //     message: 'Can not Deleted'
    // })

    // Send to ErrorHandler:
    res.errorStatusCode = 404
    // throw new Error('Can not Deleted. Maybe already deleted.')

}


})


app.use(router)


 
//*------------------------------------------------------- *//
router.get('/:id', async (req, res) => {
// const data = await Todo.findOne({where: {id: req.params.id}})
//* daha kisasi primary key
const data = await Todo.findByPk(req.params.id)
console.log(data)
res.status(200).send({
    error: false,
    result: data,
})

})



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