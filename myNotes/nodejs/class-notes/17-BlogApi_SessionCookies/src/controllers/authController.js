"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/* ------------------------------------------------------- */
const { User } = require('../models/userModel');
/* ------------------------------------------------------- */

const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- */

module.exports.auth = {
login: async(req,res) => {
const {email,password} = req.body;

if (email && password) {
const user = await User.findOne({email: email})

if (user) {

   if (user.password == passwordEncrypt(password) ) {
         //? SESSION */


         //? SESSION */

         //? */ COOKIE */


         //? COOKIE */
   } else {
      res.errorStatusCode = 401
      throw new Error('Login parameters are not true.')
   }
} else {
   res.errorStatusCode = 401;
   throw new Error('This user not found.');
}

}else{
   res.errorStatusCode = 401;
   throw new Error('Email and password are required');
}

},

logout: async(req,res) => {},


}
/* ------------------------------------------------------- */