const jwt = require('jsonwebtoken')
const adminmodel = require('../models/admin')



const checkAdminAuth = async(req,res,next) =>{
    // console.log("middleware")
    const {token} = req.cookies
    // console.log(token)
    if(!token){
        req.flash('error','unauthorized admin')
        res.redirect('/');
    }
    else{
        const data = jwt.verify(token,
            'pragyanshutayal1234')
        // console.log(data)
        const admin = await  adminmodel.findOne({_id:data.id})
        req.admin = admin
        next()
    }
}


module.exports = checkAdminAuth