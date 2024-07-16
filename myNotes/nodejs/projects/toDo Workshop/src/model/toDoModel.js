'use strict';

// const mongoose = require('mongoose');
const {Schema , model} = require('mongoose')

const ToDoShema = new Schema({
//id

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
        // type: Number,
        // min: -32768,  // 16-bit signed integer minimum değeri
        // max: 32767,   // 16-bit signed integer maksimum değeri
        // validate: {
        // validator: Number.isInteger,
        // message: '{VALUE} bir tamsayı olmalıdır'
        type:String,
        enum:{
            values:['low','medium','high'],
            message:'{VALUE} bir tamsayı olmalıdır'
        }
    },
    
    isDone:{
        type: Boolean,
        default: false
    }

     //createAt 
     //uptadateAt

},{
    collection:'todos',
    timestamps:true
})