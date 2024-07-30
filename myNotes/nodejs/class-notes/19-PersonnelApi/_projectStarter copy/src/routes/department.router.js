"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const depertments = require('../controllers/department.controller')



router.route('/')
.get(depertments.list)



/* ------------------------------------------------------- */
module.exports = router