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
      
    }
}


/* ------------------------------------------------------- */