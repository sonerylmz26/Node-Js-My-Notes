"use strict";
/* -------------------------------------------------------
    EXPRESSJS - PRODUCTAPI Project with Mongoose / USERMODEL 
------------------------------------------------------- */

const mongoose = require('mongoose');
// const {Schema, model} = require('mongoose');

const passwordEncrypt = require('../helpers/passwordEncrypte')

const UserSchema = new mongoose.Schema({

//_id

email:{
    
type:String,
required:[true, 'Email must be Required'],
trim:true,
validate: [
    (email) => (email.includes('@') && email.includes('.')),
    'Email type is incorrect.'
]
},
password:{

type:String,
trim:true,
required: [true, 'Password is required.'],
set:(password) => (password.length >= 8 ? passwordEncrypt(password) : 'Wrong'),
validate:(password) => (password != 'wrong'),


},



},{
    collation:'users',
    timestamps:true

});

module.exports.User = mongoose.model('User', UserSchema);