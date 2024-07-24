"use strict";
/* -------------------------------------------------------
    EXPRESSJS - PRODUCTAPI Project with Mongoose / productModel
------------------------------------------------------- */

const mongoose = require("mongoose");




const CategorySchema = new mongoose.Schema({


    name:{
        type: String,
        trim: true,
        required: true
    }


}, {
    collection: 'productCategory',
    timestamps: true
})


const ProductSchema = new mongoose.Schema({




},{
    collection: 'products',
    timestamps: true
});


module.exports ={
    Category : mongoose.model("Category", CategorySchema),
    Product: mongoose.model("Product", ProductSchema)
}
