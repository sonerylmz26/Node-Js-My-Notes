"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
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
//    res.send('Middleware')


if(req.query.coursName == 'clarusway'){
    next();

}else{
    res.send({
        message:'Kurs ismi yanlistir!!'
    })
}
  
})


app.get("/", (req, res) => {
console.log('route-path calist')
res.send('Middleware')
})
// app.post("/", (req, res) =>{
// req.query ='soner'
// res.send('asdas')
// })

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));