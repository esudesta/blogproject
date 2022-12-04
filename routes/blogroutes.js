const express= require("express")
const router = express.Router()
const blogController = require("../controllers/blogController")

router.get("/",blogController.all_blogs)
router.get("/blog/:id",blogController.get_blog)
router.get("/add",blogController.get_add_blog)
router.post("/add",blogController.post_add_blog)
module.exports =router
