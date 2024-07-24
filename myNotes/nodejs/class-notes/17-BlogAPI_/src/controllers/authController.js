"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose / Auth Controller
------------------------------------------------------- */

const {User} = require("../models/userModel")
//* password encrypte sifreleme icin 
const passwordEncrypt = require('../helper/passwordEncrypte');

/* ------------------------------------------------------- */
//?Auth Controller
//* login - logout durumu

//! login ile kullanici kontrollu


module.exports.auth ={
    // login gelen passwordu veri tabanindan   kontrol edicek cookide sakliycak
login: async(req, res) => {
const {email,password} = req.body
if(email && password){
// console.log('ok')
const user = await User.findOne({email: email})
//user ok
if (user) {
    if (user.password == passwordEncrypt(password)) {
        //password ok

//? session yazma 
/* Session */
//1.data kaydetme yontemi
// req.session = {
//    email: user.email,
//    password:user.password
// }
//2.data kaydetme yontemi
// req.session.email = user.email
//e mail yerine id ile ulasabiliriz.
req.session._id = user._id
req.session.password = user.password
res.status(200).send({
    errror:false,
    message:'login ok',
    user
})
/* Session */

/* Cookie */
if (req.body?.remindMe == true) {
    req.session.remindMe = true

    req.sessionoptions.maxAge = 1000 * 60 * 60 * 24 * 3
} else {
    
}


/* Cookie */

    } else {
        res.errorStatusCode = 401
    throw new Error('Login Parameters are not true')
    }
} else {
    res.errorStatusCode = 401
    throw new Error('This User not found')
}

} else {
    res.errorStatusCode = 401
    throw new Error('Email and Password are required')
}
    
    },

    // passwordu cookiden silecek.
    logout: async(req, res) => {
//* Session/ cooki data silme 

req.session = null

res.status(200).send({
    errror:false,
    message:'logout ok',
    
})

      
    }
}


/* ------------------------------------------------------- */