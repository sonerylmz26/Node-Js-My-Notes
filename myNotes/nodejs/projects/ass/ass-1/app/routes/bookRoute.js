'use strict';
const express = require('express');

const router = require('express').Router()

const books = require('../controllers/bookController');


router.route('/')
.get(books.showAllBooks)
.post(books.createNewBook)

router.route('/:id')
.get(books.showOneBook)

module.exports = router