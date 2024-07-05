'use strict';


const express = require('express');
const app = express();
require('dotenv').config();

const HOST =process.env.HOST || 'localhost';
const PORT =process.env.PORT || 3000

//? Router express icerisindeki url kontrolu icin ozel bir application dir. 
//? Peki routueri nasil tanimliyoruz 
//? 2 yuntemi var 1 app icerisinde 2 farkli bir dosyada.

//* 1.Yontem app icerisinde 
//? const router = express.Router(); // 1.asama 
//* 2. asamada router appe tanimlamamiz lazim onuda use() metodu ile yapabiliriz.
//? app.use(router)

// const router = express.Router();

// router.get('/', (req, res) =>{
//     res.send({
//         message: 'Welcome to Inside App Rooter'
//     })
// })


// app.get('/', (req, res) =>{
//     res.send(`Welcome Express and Router`)
// })

//* Eger ayni url de farkli metodlar denemek istiyorsak . tek tek de yazabiliriz tek bir routeda da yazabiliriz.
// router.route('/')
// .get((req, res) =>{
//     res.send({
//         message: 'Welcome to Inside App Rooter',
//         name: 'Soner',
//         age:30
//     })
// }).post((req, res) =>{
//     console.log('post atildi')
// })


//* Burada import yaptik artik burada router adli dosyyi kullanabiliriz.
const router = require('./Router/router')

app.use(router)
app.listen(PORT,HOST, ()=> console.log(`Running on http://${HOST}:${PORT}`))

