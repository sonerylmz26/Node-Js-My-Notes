"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))



const BookModelData = sequelize.define('books', {
    title: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
  });

//   sequelize.sync()
// sequelize.sync({ alter: true })

sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

  module.exports =BookModelData;