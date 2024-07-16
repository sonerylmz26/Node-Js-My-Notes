'use strict';

const router = require('express').Router();


const {todoApp} = require('../controllers/toDoAppController');

router.route('/')
.get(todoApp.list)
.post(todoApp.create)
router.route('/todos/:id')
.get(todoApp.read)
 .put(todoApp.update)
 .delete(todoApp.delete)

module.exports = router