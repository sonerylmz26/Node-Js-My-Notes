'use strict';

const mongoose = require('mongoose');

const TodoAppSchema = new mongoose.Schema({
    //_id
    id:{
      type: Number,
      trim:true,
    required:true
    },

 title: {
    type:String,
    trim:true,
    required:true

 },
 description:{
    type:String,
    trim:true,
    required:true
 },
 priority:{
    type: Number,
    min: -32768,  // 16-bit signed integer minimum değeri
    max: 32767,   // 16-bit signed integer maksimum değeri
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} bir tamsayı olmalıdır'
 }},

 isDone:{
    type: Boolean,
    default: false
 }
 //createAt 
 //uptadateAt
},
{
collation : 'todos',
timestamps: true,

})

module.exports = {
TodoApp : mongoose.model('TodoApp', TodoAppSchema)
}