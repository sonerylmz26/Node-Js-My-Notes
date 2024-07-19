'use strict';

const { User } = require('../models/userModel');


module.exports.user = {

    list: async (req,res) => {
    const data = await User.find().collation({ locale: 'en', strength: 2 });
    
    res.status(200).send({
      error: false,
      result: data
    })
    
    }
    ,
    
    
    create: async (req,res) => {
      
    
    // res.send('crete yapildi')
    
        const data = await  User.create(req.body)
        res.status(201).send({
            error: false,
            result: data
        })
    },
    /* ------------------------------------------------------- */
    //read:
    
    read: async (req,res) => {
    
    const  data = await User.findOne({_id:req.params.userId}).collation({ locale: 'en', strength: 2 });
    
    res.status(200).send({
      error: false,
      result: data
    })

    },
    
    /* ------------------------------------------------------- */
    //update:
    update : async (req,res) => {
      // const data = await BlogCategory.updateOne({ ...filter }, { ...data })
      const data = await User.updateOne({ _id: req.params.cuserId }, req.body, { runValidators: true }).collation({ locale: 'en', strength: 2 })
      // const data = await BlogCategory.findByIdAndUpdate(req.params.categoryId, req.body) onerilmiyor cunku findById zaten arkaplanda findOne yapiyor.
    res.status(202).send({
      error: false,
      result: data,
      new: await User.findOne({_id:req.params.userId}).collation({ locale: 'en', strength: 2 })
    })
    },
    /* ------------------------------------------------------- */
    //delete:
    delete: async (req, res) => {
    
    const data = await User.deleteOne({ _id: req.params.userId }).collation({ locale: 'en', strength: 2 })
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
    
 
    },
    /* ------------------------------------------------------- */
    /* ------------------------------------------------------- */
    /* ------------------------------------------------------- */
    
    
    
    
    
    
    
    }