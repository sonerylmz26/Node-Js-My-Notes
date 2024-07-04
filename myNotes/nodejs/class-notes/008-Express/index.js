'use strict';

const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.get('/', (req, res) =>{
    res.send('Welcome')
   

})

// app.get('/s' , (req,res)=>{
//     res.send(({
//         adi: 'soner',
//         type:'blue',
//         number:5
//     }))
// })
app.get ('/*', (req, res) =>{

    res.send(
        {
            url:{
                protocol: req.protocol,
                scheme: req.scheme,
                hostname: req.hostname,
                baseUrl: req.baseUrl,
                params: req.params,
                query: req.query,
                path: req.path,
                originalUrl: req.originalUrl,
                secure : req.secure,
                url: req.url
            }
        }
    )
})

app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`))

