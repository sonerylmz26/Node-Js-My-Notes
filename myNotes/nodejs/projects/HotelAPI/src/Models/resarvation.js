'use strict';

const mongoose = require('mongoose');





const ResarvationSchema = new mongoose.Schema({
userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
},
roomId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
},
arrivalDate:{
    type: Date,
    default: Date.now(),
},
departureDate:{
    type: Date,
    default: Date.now(),
},
guestNumber: {
    type: Number,
    required: true,
},
night: {
    type: Number,
    required: true,
},
price: {
    type: Number,
    required: true,
},
totalPrice: {
    type: Number,
    required: true,
},
},{
    collation:'resarvation',
    timestamps: true
})

module.exports = mongoose.model('Resarvation', ResarvationSchema)