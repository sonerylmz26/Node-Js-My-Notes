"use strict";
/* -------------------------------------------------------
    EXPRESSJS - PRODUCTAPI Project with Mongoose / productControllers
------------------------------------------------------- */


const {Category, Product}= require('../models/productsModel')


module.exports.category = {
// list: async(req,res) => {
  
// },
// create: async(req,res) => {
  
// },
// read: async(req,res) => {
  
// },
// update: async(req,res) => {
  
// },
// delete: async(req,res) => {
  
// },


list: async (req, res) => {
    const data = await Category.find().collation({ locale: 'en', strength: 2 });;
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  create: async (req, res) => {
    const data = await Category.create(req.body);
    res.status(201).send({
      error: false,
      result: data,
    })
  },
  read: async (req, res) => {
    const data = await Category.findOne({_id: req.params.userId}).collation({ locale: 'en', strength: 2 });;
    res.status(200).send({
      error: false,
      result: data,
    })
  },
  update: async (req, res) => {
    const data = await Category.updateOne({ _id: req.params.userId }, req.body, { runValidators: true }).collation({ locale: 'en', strength: 2 }); // Validate aktif et.

    res.status(202).send({
        error: false,
        result: data, // Güncelleme işleminin sayısal değerleri.
        new: await Category.findOne({ _id: req.params.userId }).collation({ locale: 'en', strength: 2 }) // Güncellenmiş datayı göster.
    })
  },
  delete: async (req, res) => {

    const data = await Category.deleteOne({ _id: req.params.userId }).collation({ locale: 'en', strength: 2 });

    if (data.deletedCount >= 1) {

        res.sendStatus(204)

    } else {

        res.errorStatusCode = 404
        throw new Error('Not Found.')

    }
  },

}