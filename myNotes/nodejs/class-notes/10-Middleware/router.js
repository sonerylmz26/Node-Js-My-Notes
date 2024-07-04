'use strict';


const express = require('express');
const app = express();
require('dotenv').config();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const router =express.Router();


//? app.get('/', (req, res) =>{
//?     res.send({
//?         message : 'Welcome Node.js'
// ?    })
//? })
/*  ----------------------------------------------- *
router.get('/', (req, res) => { res.send({ message: 'Home Page' }) })
router.get('/path', (req, res) => { res.send({ message: 'Path Page' }) })
router.post('/', (req, res) => { res.send({ message: 'Post Page' }) })
router.put('/', (req, res) => { res.send({ message: 'Put Page' }) })
router.delete('/', (req, res) => { res.send({ message: 'Delete Page' }) })
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */


//?  ----------------------------------------------- *

//!yada ortak routeda bu sekilde yazabiliyoruz.

//? ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */



//! Router'i app'in kullanabilmesi icin tanimlamaliyiz :

app.use(router)




app.listen(PORT, HOST, ()=>{
    console.log(`Running on http://${HOST}:${PORT}`);
})