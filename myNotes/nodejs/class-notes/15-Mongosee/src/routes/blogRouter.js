"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose:

const router = require('express').Router();

const { blogCategory, blogPost } = require('../controllers/blogController')

router.route('/category')
    .post(blogCategory.create)

router.route('/')
.get(blogPost.list)
/* ------------------------------------------------------- */
module.exports = router