const URL = require('../models/url');
const ShortUniqueId = require('short-unique-id');

const uid = new ShortUniqueId();



//generating the short url and sending all the urls to the home page to show in the table
async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    const shortID = uid(6);

   await URL.create({
        shortId : shortID,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id
    })

    const allurls = await URL.find({createdBy:req.user._id})


   res.render("home",{
    id:shortID,
    link:"localhost:8001/url/"+shortID,
    urls : allurls,
   })

   
    

}




//redirecting from short url to original url 
 async function handleRedirectUrl(req,res){

    const shortId = req.params.id
    const result = await URL.findOneAndUpdate({shortId},{
        $push :{visitHistory:{timestamps : Date.now()},}, 

    });
    
return res.redirect(result.redirectURL)
}




module.exports = {
    handleGenerateNewShortUrl,
    handleRedirectUrl,
  
}