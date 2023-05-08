const express = require('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/Admin/AdminController')
const BlogController = require('../controllers/Admin/BlogController')
const CategoryController = require('../controllers/Admin/CategoryController')
const ContactController = require('../controllers/Admin/ContactController')
const AboutController = require('../controllers/Admin/AboutController')
const auth = require('../middleware/auth')
const router = express.Router()

//Front-controller
router.get('/home',auth,FrontController.home) 
router.get('/register',FrontController.register) 
router.get('/about',auth,FrontController.about) 
router.get('/contact',auth,FrontController.contact) 
router.get('/',FrontController.login) 
router.get('/blog',auth,FrontController.blog)
router.get('/readmore/:id',FrontController.readmore)
router.post('/contactinsert',FrontController.insertcontactdata)
router.get('/api/getAllBlogs',FrontController.getallblogs)
router.get('/api/getAllBlogsbyid/:id',FrontController.getallblogsbyid)


//admin Controller
router.get('/admin/dashboard',auth,AdminController.dashboard)
router.post('/register',AdminController.register)
router.post('/adminlogin',AdminController.login)
router.get('/adminlogout',AdminController.logout)

//blog controller
router.get('/admin/blog/display',auth,BlogController.displayblog)
router.post('/insertblog',BlogController.insertblog)
router.get('/blogview/:id',BlogController.blogview)
router.get('/blogedit/:id',BlogController.blogedit)
router.post('/updateblog/:id',BlogController.updateblog)
router.get('/blogdelete/:id',BlogController.deleteblog)
router.post('/userblog',BlogController.insertuserblog)

//Category Controller
router.get('/admin/category/display',auth,CategoryController.categorydisplay)
router.post('/insertcategory',CategoryController.insertcategory)
router.get('/categoryview/:id',CategoryController.categoryview)
router.get('/categoryedit/:id',CategoryController.categoryedit)
router.post('/updatecategory/:id',CategoryController.updatecategory)
router.get('/categorydelete/:id',CategoryController.deletecategory)

//Contact Controller
router.get('/admin/contact/display',auth,ContactController.contactdisplay)
router.get('/contactview/:id',ContactController.contactview)
router.get('/contactdelete/:id',ContactController.deletecontact)


//AboutUs Controller
router.get('/admin/about/display',auth,AboutController.aboutdisplay)
router.get('/aboutusedit/:id',AboutController.aboutusedit)
router.post('/updateaboutus/:id',AboutController.updateaboutus)



// //route
// app.get('/',(req,res)=>{
//     res.send("HELLO WORLD!")
// })

// app.get('/home',(req,res)=>{
//     res.send("HELLO HOME!")
// })

module.exports = router