'use strict';

const Book = require('../models/bookModel');

module.exports = {
    showAllBooks: async (req, res) => {
      try {
        const books = await Book.findAndCountAll();
        res.status(200).send({
          error: false,
          data: books,
          message: 'Books retrieved successfully',
        });
      } catch (error) {
        res.status(500).send({
          error: true,
          message: error.message,
        });
      }
    },
  
    createNewBook: async (req, res) => {
      try {
        const data = await Book.create(req.body);
        res.status(201).send({
          error: false,
          result: data.dataValues,
          message: 'Book created successfully',
        });
      } catch (error) {
        res.status(500).send({
          error: true,
          message: error.message,
        });
      }
    },
  
    showOneBook: async (req, res) => {
      try {
        const data = await Book.findOne({
          where: {
            id: req.params.id,
          },
        });
        if (data) {
          res.status(200).send({
            error: false,
            result: data.dataValues,
            message: 'Book retrieved successfully',
          });
        } else {
          res.status(404).send({
            error: true,
            message: 'Book not found',
          });
        }
      } catch (error) {
        res.status(500).send({
          error: true,
          message: error.message,
        });
      }
    },
  
    updateBook: async (req, res) => {
      try {
        const data = await Book.update(req.body, {
          where: { id: req.params.id },
        });
        const updatedBook = await Book.findOne({ where: { id: req.params.id } });
        res.status(202).send({
          error: false,
          result: data,
          message:
            data[0] === 0 ? 'Book not found' : 'Book updated successfully.',
          new: updatedBook ? updatedBook.dataValues : null,
        });
      } catch (error) {
        res.status(500).send({
          error: true,
          message: error.message,
        });
      }
    },
  
    deleteBook: async (req, res) => {
      try {
        const data = await Book.destroy({ where: { id: req.params.id } });
        res.status(202).send({
          error: false,
          result: data,
          message: data === 0 ? 'Book not found' : 'Book deleted successfully.',
        });
      } catch (error) {
        res.status(500).send({
          error: true,
          message: error.message,
        });
      }
    },
  };