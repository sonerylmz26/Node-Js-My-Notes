"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose / password sifreleme/Encrypt
------------------------------------------------------- */


/* ------------------------------------------------------- */
// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
const crypto = require('node:crypto')

/* ------------------------------------------------------- */
const keyCode = process.env.SECRET_KEY
const loopCount = 10_000
const charCount = 32
const encType = 'sha512'


module.exports = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
    
}