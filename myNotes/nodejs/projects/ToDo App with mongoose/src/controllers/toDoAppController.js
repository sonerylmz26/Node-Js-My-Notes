'use strict';

const {TodoApp} = require('../models/toDoAppModels')

module.exports.todoApp ={

    list: async (req,res)=>{
        try {
            const data = await TodoApp.find().collation({ locale: 'en', strength: 2 }).exec(); // findAndCountAll yerine find kullanılır
            
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

    },

    create: async (req, res) => {

        // res.send('create method')

        const data = await TodoApp.create(req.body)
        // console.log(data)

        res.status(201).send({
            error: false,
            result: data
        })

    },
    read: async (req, res) => {
        try {
            const data = await TodoApp.findById(req.params.id).exec();
            
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
    },
    update: async (req, res) => {
        try {
            const data = await TodoApp.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec(); // new: true, güncellenmiş kaydı döndürür
            
            res.status(202).send({
              error: false,
              result: data,
              message: data ? 'Updated' : 'Cannot be Updated.'
            });
          } catch (error) {
            res.status(500).send({
              error: true,
              message: error.message
            });
          }
    },
    delete: async (req, res) => {
        try {
            const data = await TodoApp.findByIdAndDelete(req.params.id).exec();
            
            if (data) {
              res.sendStatus(204); // Deleted
            } else {
              res.status(404).send({
                error: true,
                message: 'Cannot be Deleted. Maybe already deleted.'
              });
            }
          } catch (error) {
            res.status(500).send({
              error: true,
              message: error.message
            });
          }
        
    },



}