

const router = require('express').Router();
const { category } = require("../controllers/productsController");



router.route("/")
.get(category.list)
.post(category.create);
router.route("/:userId")
.get(category.read)
.put(category.update)
.patch(category.update)
.delete(category.delete);

module.exports = router;

