'use strict';

const router = require('express').Router();
const Todo = require('../controllers/todoController')


router.route('/')
.get(Todo.list)
.post(Todo.create)

router.route('/:id')
.get(Todo.read)
.put(Todo.update)
.delete(Todo.delete)

module.exports = router