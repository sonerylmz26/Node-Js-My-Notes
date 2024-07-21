'use strict';

const mongoose = require('mongoose');
// const { Schema} = require('mongoose');


const passwordEncrypt = require('../helpers/passwordEncrypt')

/* ------------------------------------------------------- */
const userShema = new mongoose.Schema({
email:{
    type:String,
    trim:true,
    unique:true,
    required: [true, 'Email is required.'],
    validate: [
        (email) => (email.includes('@') && email.includes('.')),
        'Email type is incorrect.'
    ]
},
password:{
    type:String,
    trim:true,
    required: [true, 'Password is required.'],
    // set: (password) => passwordEncrypt(password) // Veri kaydederken, return edilen data kaydedilir.
    //    set: passwordEncrypt,
    set: (password) => (password.length >= 8 ?  passwordEncrypt(password) : 'wrong'),
        validate: (password) => (password != 'wrong') // Güncelleme yaparken default olarak validate çalışmaz. // { runValidators: true }
        // Set methodu validate methodundan önce çalışır. Dolayısı ile validate datası her zaman aynı formattadır.
        // set: (password) => {
        //     if (password.length >= 8) {
        //         return passwordEncrypt(password)
        //     } else {
        //         return 'wrong'
        //     }
        // },
        // validate: (password) => {
        //     if (password == 'wrong') {
        //         return false
        //     } else {
        //         return true
        //     }
},
firsName:String,
lastName:String


},{

    collection: 'users',
    timestamps: true

});
// module.exports = mongoose.model('User', userShema);
module.exports.User = mongoose.model('User', userShema)
/* ------------------------------------------------------- */