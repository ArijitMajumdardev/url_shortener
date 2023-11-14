const express = require('express')
const URL = require('../models/url')
const { restrictTo } = require('../middlewares/auth')
const router = express.Router()



router.get('/admin/urls',restrictTo(["ADMIN"]), async (req,res)=>{
    
    const allurls = await URL.find({})
    res.render("home",{
        urls : allurls,
      });
    })



//when the user first visits the "/" path i.e the home page , it shows all the urls
router.get('/',restrictTo(["NORMAL","ADMIN"]),async (req,res)=>{


    if(!req.user) return res.redirect("/login")


    const allurls = await URL.find({createdBy:req.user._id})

    res.render("home",{
        urls : allurls,
      });
    })


router.get("/signup", (req,res)=>{

    res.render("signup")
})

router.get("/login",(req,res)=>{
    res.render("login");
})




module.exports = router
 