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
  
req.body.userId = req.user?._id
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
    // // FILTERING & SEARCHING & SORTING & PAGINATION

        // // FILTERING:
        // // URL?filter[fieldName1]=value1&filter[fieldName2]=value2
        // const filter = req.query?.filter || {}
        // // console.log(filter)

        // // SEARCHING:
        // // URL?search[fieldName1]=value1&search[fieldName2]=value2
        // const search = req.query?.search || {}
        // // console.log(search)
        // // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        // for (let key in search)
        //     search[key] = { $regex: search[key] }
        // // console.log(search)

        // // SORTING:
        // // Cancelled: URL?sort[fieldName1]=1&sort[fieldName2]=-1 // Mongoose 8.0 > deprecated
        // // URL?sort[fieldName1]=asc&sort[fieldName2]=desc
        // const sort = req.query?.sort || {}
        // // console.log(sort)

        // // PAGINATION:
        // // URL?page=3&limit=15&skip=20
        // // LIMIT:
        // let limit = Number(req.query?.limit)
        // limit = limit > 0 ? limit :  Number(process.env?.PAGE_SIZE || 20)
        // // console.log(limit, typeof limit)
        // // PAGE:
        // let page = Number(req.query?.page)
        // page = page > 0 ? page : 1
        // // SKIP:
        // let skip = Number(req.query?.skip)
        // skip = skip > 0 ? skip : ((page-1) * limit)

        // // RUN:
        // // const data = await BlogPost.find({ ...filter, ...search }).sort(sort).skip(skip).limit(limit)
        // const data = await BlogPost.find({ ...filter, ...search }).sort(sort).skip(skip).limit(limit).populate('categoryId')


      // const data = await BlogPost.find({ ...filter }, { ...select })
      // const data = await BlogPost.find({}, { _id: 0, categoryId: 1, title: 1, content: 1 })
      const data = await BlogPost.find().collation({ locale: 'en', strength: 2 })
      

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
