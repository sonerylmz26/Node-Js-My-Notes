'use strict';

const mongoose = require('mongoose');
// const { Schema} = require('mongoose');



/* ------------------------------------------------------- */
// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
const crypto = require('node:crypto')

/* ------------------------------------------------------- */
const keyCode = process.env.SECRET_KEY
const loopCount = 10_000
const charCount = 32
const encType = 'sha512'


const passwordEncrypt = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
    
}
console.log(passwordEncrypt('12313'))
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