"use strict"

/* --------------------------------------------

        NODEJS

-------------------------------------------- */
const http = require('node:http') // builtin: https://nodejs.org/api/http.html
/* -------------------------------------------- *

 http.createServer((req, res) => { ... }
const app = http.createServer((request, response) => {

    response.end('<h1> Welcome to NodeJS Server </h1>')

})
/* -------------------------------------------- */
// http.createServer((req, res) => { }

// const app = http.createServer((request, response) => {

//     response.end('<h1> Welcome to NodeJS Server </h1>')

// })

// const app = http.createServer((request, response)=> {

// // response.end('<h1> Welcome dsasdas to NodeJS Server </h1>  <p/> Soner yilmaz <p>'),
// // console.log('first')
// console.log(request.url)
// })

const app = http.createServer((req,res) => {

// if (req.url == '/api'){


    
// res.write('yazi 1') 
// res.write('yazi 2') 
// res.write('yazi 3') 
// res.write('yazi 4')  




// res.end()



// }else{
//     res.end('Any Page')
// }
if(req.method == 'GET'){

    const obj = {
        result: true,
        message: 'Islem Başarili.'
    }

res.write(JSON.stringify(obj))
res.end()
}


})

//! Default server domain (local domain ) =localhost */   
//! Default server IP (local IP ) =127.0.0.1 */   


app.listen(3001, ()=> {
    console.log(`Server started http://127.0.0.1:3001 `)
})



