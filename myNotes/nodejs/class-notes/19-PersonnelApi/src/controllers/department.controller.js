"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */


const Department = require("../models/department.model")


module.exports.department ={
    list: async(req,res) => {
        const data = await res.getModelList(Department)
      res.status(200).send({
        error:false,
        data,
deatils:await res.getModelListDetails(Department)
      })

    },

create: async(req,res) => {
        const data = await Department.create(res.body)
      res.status(201).send({
        error:false,
data
      })

    },
  read: async(req,res) => {
        const data = await res.Department.findOne({_id:req.params.id}).collation({ locale: 'en', strength: 2 })
      res.status(200).send({
        error:false,
        data,
      })

    },
    //? updateOne 3 parametre alir {filter} , update , options{
            //?runValidators: true
        //? }
    update: async(req,res) => {
        const data = await res.Department.updateOne({_id:req.params.id},req.body, {
            runValidators: true
        } ).collation({ locale: 'en', strength: 2 })
        if (data.modifedCount >= 0) {
            res.sendStatus(202)
        } else {
            res.sendStatus(404)
        }
    //   res.status().send({
    //     error:false,
    //     data,

    //   })

    },
    delete: async(req,res) => {
        const data = await res.Department.deleteOne({_id:req.params.id}).collation({ locale: 'en', strength: 2 })
    //   res.status().send({
    //     error:false,
    // })

    if (data.deletedCount >= 1) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
    }
}