'use strict';
const mongoose = require('mongoose');
const ToDo = require('../model/toDoModel');
require('../helpers/customError')
module.exports = {
    list: async (req,res) => {
      try{
        const data = await ToDo.find({})
        res.status(200).send({
            isError:false,
            data:data
        })
      }
      catch (error) {
        res.status(500).send({
          error: true,
          message: error.message
        });
      }
    },
 create: async (req,res) => {
        try{
          const data = await ToDo.create(req.body)
          res.status(201).send({
  isError:false,
  data:data
          })
        }
        catch (error) {
          res.status(500).send({
            error: true,
            message: error.message
          });
        }
      },
   read: async (req,res) => {
        try{
          const isIdValid = mongoose .Types.ObjectId.isValid(req.params.id)
          if(!isIdValid){
            throw new CustomError('id is not valid!', 400)
          }
          
          const data = await ToDo.findOne({_id:req.params.id})
          res.status(200).send({
            isError:false,
            data:data
          })
        }
        catch (error) {
          res.status(500).send({
            error: true,
            message: error.message
          });
        }
      },
  update: async (req,res) => {
        try{
          // const data = await ToDo.updateOne({_id:req.params.id},req.body)
          // const updateData =  await ToDo.findOne({_id:req.params.id})
          const data = await ToDo.findByIdAndUpdate(req.params.id,req.body,{new:true})
          res.status(203).send({
            isError:false,
            data
          })
        }
        catch (error) {
          res.status(500).send({
            error: true,
            message: error.message
          });
        }
      },
    delete: async (req,res) => {
        try{
          const {deletedCount} = await ToDo.deleteOne({_id:req.params.id})
    
          const data = await ToDo.find({})
          if(!deletedCount){
            throw new Error('Something went wrong!', 404)
          }
          res.status(204).send({
            isError:false,
            data
          })
        }
        catch (error) {
          res.status(500).send({
            error: true,
            message: error.message
          });
        }
      },

}