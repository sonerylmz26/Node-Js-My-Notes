'use strict';

/* -------------------------------------------------------
    EXPRESSJS - PRODUCTAPI Project with Mongoose / Password Encrypt
------------------------------------------------------- */
const crypto = require('node:crypto')


const keyCode = process.env.CYRPTO_KEY
const loopCount = 10_000;
const charCount = 32
const encType = 'sha512'

module.exports = function (password)  {
return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}