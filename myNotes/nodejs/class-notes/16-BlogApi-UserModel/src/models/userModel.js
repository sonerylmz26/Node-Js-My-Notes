'use strict';

const mongoose = require('mongoose');
// const { Schema} = require('mongoose');



const userShema = new mongoose.Schema({
email:{
    type:String,
    trim:true,
    unique:true,
    required: [true, 'Email is required.'],
},
password:{
    type:String,
    trim:true,
    required: [true, 'Password is required.'],
},
firsName:String,
lastName:String


},{

    collection: 'users',
    timestamps: true

});
// module.exports = mongoose.model('User', userShema);
module.exports.User = mongoose.model('User', userShema)