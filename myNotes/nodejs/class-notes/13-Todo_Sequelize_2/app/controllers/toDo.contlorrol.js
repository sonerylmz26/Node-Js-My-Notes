'use strict';

// Model:
const Todo = require('../models/todo.model')


module.exports = {

list:  async (req, res) => {
    const data = await Todo.findAll()
   // const data = await Todo.findByPk(req.params.id)
   res.status(200).send({
       error: false,
       result: data,
       
   })
  
},
create: async (req, res) => {

    const data = await Todo.create(req.body)
       res.status(201).send({
            error: false,
            result: data.dataValues
        })
    },





read: async (req, res) => {
    // const data = await Todo.findOne({where: {id: req.params.id}})
    // const id = req.params.id
    console.log(req.params)
    //* daha kisasi primary key
    const data = await Todo.findByPk(req.params.id)
    console.log(data)
    res.status(200).send({
        error: false,
        message:`Todo ${req.params.id} basarila geldi.`,
        result: data,
    })
    
    },

   update: async (req, res) => {
    // const data = await Todo.update({ ...newData }, { ...filter })
    const data = await Todo.update(req.body , { where: { id: req.params.id } })
// console.log(data)
res.status(202).send({
    error: false,
    result: data,
    message: (data[0] >= 1 ? 'Updated' : 'Can not Updated.'),
    new: await Todo.findByPk(req.params.id) // Güncellenmiş kaydı göster.
})


},

delete:async (req, res) =>{
    // const data = await Todo.destroy({ ...filter })

const data = await Todo.destroy({ where: { id: req.params.id } })
// console.log(data)

//  res.status(204).send({
//      error: false,
//      result: data,
//      message: (data >= 1 ? 'Deleted.' : 'Can not Deleted.'),
//  })

if (data >= 1) {
    // Deleted:
    // res.status(200).send({
    //     error: false,
    //     result: data,
    //     message: 'Deleted'
    // })

    // Sadece statusCode çıktısı ver:
    res.sendStatus(204)

} else {
    // Not Deleted:
    // res.status(404).send({
    //     error: true,
    //     result: data,
    //     message: 'Can not Deleted'
    // })

    // Send to ErrorHandler:
    res.errorStatusCode = 404
    // throw new Error('Can not Deleted. Maybe already deleted.')

}


}


}