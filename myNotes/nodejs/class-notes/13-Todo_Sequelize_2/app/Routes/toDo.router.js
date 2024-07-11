

const router = require('express').Router()
const todo = require('../controllers/toDo.contlorrol')




// CRUD: Create Read Update Delete
//* ------------------------------------------------------------ *//
// //LIST TODO:
// router.get('/', todo.list );
// // READ TODO:
// router.get('/:id',todo.read )
// // CREATE TODO:
// router.post('/',  todo.create)  
// // UPDATE TODO:
// router.put('/:id',todo.update );
// // DELETE TODO:
// router.delete('/:id', todo.delete);

//*------------------------------------------------------- *//
// ortak routelari bir araya yazabilirim.

router.route('/')
.get(todo.list)
.post(todo.create)

router.route('/todo/:id')
.get(todo.read)
.put(todo.update)
.delete(todo.delete)






module.exports = router