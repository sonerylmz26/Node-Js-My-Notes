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


if(isNaN(req.params.id)){
 throw new Error('The Id must be Number');

}else{
    res.send('id is true')
}


});



/* ------------------------------------------------------- */
//! TRY-CATCH:



router.get('/user/:id', function (req, res) {

try{
    if(isNaN(req.params.id)){
        throw new Error('The Id must be Number');
       
       }else{
           res.send('id is true')
       }
} catch(err){
    
}



});




/* ------------------------------------------------------- */
/* ------------------------------------------------------- */








app.use(router)
app.listen(PORT, ()=>{
    console.log("Running: http://127.0.0.1:" + PORT)
} )