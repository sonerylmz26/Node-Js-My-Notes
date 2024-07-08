'use strict';

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || 'localhost';

const router = express.Router();
app.use(router)
router.get('/',  (req, res)=> {
res.send('Welcome')
console.log('Node.js 12')
})






app.listen(PORT, HOST , ()=> console.log(`Running on http://${HOST}:${PORT}`))