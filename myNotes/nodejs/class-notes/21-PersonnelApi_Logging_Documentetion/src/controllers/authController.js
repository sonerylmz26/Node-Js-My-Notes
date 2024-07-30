"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require('../models/personnel.model')

const passwordEncrypt = require('../helpers/passwordEncrypt')

/* ------------------------------------------------------- */

module.exports = {

    login: async (req, res) => {
        const {username , password} = req.body

        if (username && password) {
            const user = await Personnel.findOne({username}) // modeldeki set metodu findOne da da calisiyor.
            if (user && user.password == passwordEncrypt(password)) {
                if (user.isActive) {
                    res.send('ok')
                } else {
                    res.errorStatusCode = 401
                throw new Error('This user is not active.')
                }

            } else {
                res.errorStatusCode = 401
                throw new Error('Wrong username or password.')
            }
        } else {
            res.errorStatusCode = 401
                throw new Error('Please enter username and pasword.')
        }

    },

    logout: async (req, res) => {


    }

}


/* ------------------------------------------------------- */