"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose:

const {BlogCategory,  BlogPost} = require('../models/blogModel')

module.exports.blogCategory = {


list: async (req,res) => {
const data = await BlogCategory.find()

res.status(200).send({
  error: false,
  result: data
})

}
,





create: async (req,res) => {
  

// res.send('crete yapildi')

    const data = await  BlogCategory.create(req.body)
    res.status(201).send({
        error: false,
        result: data
    })
}

}


module.exports.blogPost = {
    // list:
    list: async (req, res) => {

        // const data = await Todo.findAll()
        try {
            const data = await BlogCategory.find().collation({ locale: 'en', strength: 2 }); // findAll yerine find kullanılır
            
            res.status(200).send({
              error: false,
              result: data
            });
          } catch (error) {
            res.status(500).send({
              error: true,
              message: error.message
            });
          }
    // read:

}}