

'use strict';

require('dotenv').config();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8000;

const swaggerAutogen = require('swagger-autogen')();
const packejson = require('../package.json');
const document = {

    info:{
version: packejson.version,
title:'Personel API',
description:''
    },

}