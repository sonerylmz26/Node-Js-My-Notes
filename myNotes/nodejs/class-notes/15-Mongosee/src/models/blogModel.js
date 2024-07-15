"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose:

const mongoose = require("mongoose");


/* -------------------------------------------------------
   blogCategory icin shema olusturuyoruz
------------------------------------------------------- */
// const blogCategory = new mongoose.Schema({...fieldName},{...modelSetting})

const BlogCategorySchema = new mongoose.Schema({

//_id otomatik

name:{
    type:String,
    trim:true,
    required:true,

}
// createdAt // timestamps: true
// updatedAt // timestamps: true

},{
collation:'blogCategory',
timestamps:true,

}


)
const BlogPostSchema = new mongoose.Schema({

categoryId :{
type: mongoose.Schema.Types.ObjectId,
ref:'BlogCategory',
required:true,
},

title:{
    type:String,
    trim:true,
    required:true,

},
content:{
    type: String,
        trim: true,
        required: true
},




},{
    collation:'blogPost',
    timestamps:true,

})



// const BlogCategory = mongoose.model('BlogCategory', blogCategory);
//  yada daha kolay direk module export iccerisidne obje seklinde

module.exports ={
    BlogCategory : mongoose.model('BlogCategory', BlogCategorySchema),
    BlogPost: mongoose.model('BlogPost', BlogPostSchema )
}