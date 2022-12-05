const express= require("express")
const router = express.Router()
const blogController = require("../controllers/blogController")
const isAuth = require("../middleware/isAuth")



router.get("/",isAuth,blogController.all_blogs)
router.get("/blog/:id",isAuth,blogController.get_blog)
router.get("/add",isAuth,blogController.get_add_blog)
router.post("/add",isAuth,blogController.post_add_blog)
router.delete("/delete/:id",isAuth,blogController.delete_blog)

module.exports =router
