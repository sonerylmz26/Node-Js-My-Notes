"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const middlewares = require("./middlewares");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().

app.get("/", (req, res,next) =>{

//    console.log('first')
//    next()
//! next() den sonra hata verir.
//! next('route)  Bu route için bir sonraki handler'a geçer.
//    res.send('Middleware')


if(req.query.coursName == 'clarusway'){
    next();

}else{
    res.send({
        message:'Kurs ismi yanlistir!!'
    })
}
  
})

const middlewareFunctin = (req, res, next) =>{
    console.log('first')
    next();
}
//? app.get('/', (middlewareFunctin) // bu sekilde de kullanabiliriz ama use kullanilir.
app.use(middlewareFunctin)

//? birden fazla middleware'i ayri fonksiyonlar halinde tanimladigimizda app ee tanimlama islemi ;
//* app.use(middlewareFunctin , middlewareFunctin2 ) yazabilirim.



app.get("/", (req, res) => {
console.log('route-path calist')
res.send('Middleware')
})
// app.post("/", (req, res) =>{
// req.query ='soner'
// res.send('asdas')
// })


// const middlewares = require('./middlewares/index');



/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));