'use strict';

/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8080;
const router = express.Router();

/* ------------------------------------------------------- *
//! THROW:
router.get('/user/:id', function (req, res) {

    // Hata gönder ve sistemi kilitle (kodlar işlemeye devam etmez) // Block Code
    // throw new Error('Hata oluştu.')
// throw new Error('Hata Yaptin Beya')

//     console.log(req.path)
//    res.send({
//     id:req.params.ip,
//     message:'Hello World'
//    })

res.errorStatusCode = 401
if(isNaN(req.params.id)){
 throw new Error('The Id must be Number');

}else{
    res.send('id is true')
}


});



/* ------------------------------------------------------- *
//! TRY-CATCH:



router.get('/user/:id', function (req, res) {

try{
    if(isNaN(req.params.id)){
        throw new Error('The Id must be Number');
       
       }else{
        res.status(200).send({
            error:true,
            message:'Id is Number Everything is good',
            method:req.method 
        })
       }
} catch(err){
  // next(error) ile hatayı errorHandler'a gönderebiliriz:
       // next(err)
    res.status(400).send({
        error:true,
        message:err.message
    })
}



});

/* ------------------------------------------------------- *
//!  ASYNC:

const asyncFunction = async () => {
throw new Error('Async-Error is Active');
};

app.get('/async', async (req,res,next)=>{

await asyncFunction()
.then() // hata yok alani
.catch((err) => {
  next(err);
}) // hata varsa burayi kullan.
})


/* ------------------------------------------------------- */
//! express-async-errors
//! $ npm i express-async-errors    

// Async fonksiyonlardaki hataları errorHandler'a yönlendir:
require('express-async-errors')

const asyncFunction = async () => {
    throw new Error('async-error')
}

app.get('/async', async (req, res, next) => {
   
    // await asyncFunction()
    // res.errorStatusCode = 400
    throw new Error('async-error', { cause: 'async function içinde bir hatadır.' })

})


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
//! ERROR-HANDLER:
// ErrorHandler 4 parametreli olmak zorunda. Hata yakalayıcı parametre 1. parametredir.
// ErrorHandler en sonda yer almalı (sayfanın en altında)
// Error handler son middleware olmalı.

const errorHandler = (error, req,res,next)=>{
    console.log('The errorHandler is working')
    const statusCode = res?.errorStatusCode || 401
    res.status(statusCode).send({
        error:true,
        message:error.message,
        cause:error.cause,
        stack:error.stack
    })
    
    
    }
/* ------------------------------------------------------- */

// app.use(router)
// Error handler son middleware olmalı.
app.use(errorHandler)
app.listen(PORT, ()=>{
    console.log("Running: http://127.0.0.1:" + PORT)
} )