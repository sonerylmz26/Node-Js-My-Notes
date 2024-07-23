"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      },



},{

    collation:'department',
    timestamps:true
})

const PersonelSchema = new mongoose.Schema({
departmentId:{},
userName:{},
password:{},
firsName:{},
lastName:{},
phone:{},
email:{},
title:{},
salary:{},
description:{},
isActice:{},
isAdmin:{},
isLead:{},
startedAt:{},



},{

    collation:'department',
    timestamps:true
})


module.exports = mongoose.model("Department", DepartmentSchema);