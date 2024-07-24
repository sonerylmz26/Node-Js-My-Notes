"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose:

const {BlogCategory,  BlogPost} = require('../models/blogModel')

module.exports.blogCategory = {

list: async (req,res) => {
const data = await BlogCategory.find().collation({ locale: 'en', strength: 2 });

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
},
/* ------------------------------------------------------- */
//read:

read: async (req,res) => {
const categoryId = req.params.categoryId
console.log(categoryId)
// const  data = await BlogCategory.findOne({_id:categoryId})

const  data = await BlogCategory.findOne({_id:req.params.categoryId}).collation({ locale: 'en', strength: 2 });

res.status(200).send({
  error: false,
  result: data
})
// if (categoryId) {
//   res.status(200).send({
//     error: false,
//     result: data
//   })
// }else{
//   res.status(404).send({
//     error: true,
//    message: 'it cannot FIND categoryID'
//   })
// }

},

/* ------------------------------------------------------- */
//update:
update : async (req,res) => {
  // const data = await BlogCategory.updateOne({ ...filter }, { ...data })
  const data = await BlogCategory.updateOne({ _id: req.params.categoryId }, req.body).collation({ locale: 'en', strength: 2 })
  // const data = await BlogCategory.findByIdAndUpdate(req.params.categoryId, req.body) onerilmiyor cunku findById zaten arkaplanda findOne yapiyor.
res.status(202).send({
  error: false,
  result: data,
  new: await BlogCategory.findOne({_id:req.params.categoryId}).collation({ locale: 'en', strength: 2 })
})
},
/* ------------------------------------------------------- */
//delete:
delete: async (req, res) => {
  const categoryId = req.params.categoryId
const data = await BlogCategory.deleteOne({ _id: req.params.categoryId }).collation({ locale: 'en', strength: 2 })
// res.status(200).send({
//   error: false,
//   result: data
// })


//? kosul yazabiliriz
if (data.deletedCount >= 1) {

  res.sendStatus(204)
  // error: false

}else {

  res.errorStatusCode = 404
  throw new Error('Not Found.')
  // error: true

}

//  else if(!categoryId){
//   res.errorStatusCode = 404
//   throw new Error('it cannot find categiryId.')
//   // error: true

// }
},
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */







},


module.exports.blogPost = {

  list: async (req, res) => {

      // const data = await BlogPost.find({ ...filter }, { ...select })
      // const data = await BlogPost.find({}, { _id: 0, categoryId: 1, title: 1, content: 1 })
      const data = await BlogPost.find({},{ categoryId: true, title: true, content: true }).collation({ locale: 'en', strength: 2 })
      

      res.status(200).send({
          error: false,
          result: data
      })

  },

  // CRUD ->

  create: async (req, res) => {

      const data = await BlogPost.create(req.body)

      res.status(201).send({
          error: false,
          result: data
      })

  },

  read: async (req, res) => {

      const data = await BlogPost.findOne({ _id: req.params.postId }).collation({ locale: 'en', strength: 2 })
 
      // const data = await BlogPost.findOne({ _id: req.params.postId }, { categoryId: true, title: true, content: true })

      res.status(200).send({
          error: false,
          result: data
      })
  },

  update: async (req, res) => {

      const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body).collation({ locale: 'en', strength: 2 })
 

      res.status(202).send({
          error: false,
          result: data, // Güncelleme işleminin sayısal değerleri.
          new: await BlogPost.findOne({ _id: req.params.postId }) // Güncellenmiş datayı göster.
      })

  },

  delete: async (req, res) => {

      const data = await BlogPost.deleteOne({ _id: req.params.postId }).collation({ locale: 'en', strength: 2 })
      

      if (data.deletedCount >= 1) {

          res.sendStatus(204)

      } else {

          res.errorStatusCode = 404
          throw new Error('Not Found.')

      }
  }
}
