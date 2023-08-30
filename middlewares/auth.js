const { getUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req,res,next){

    
    const userUid = req.cookies?.uid;

    
    if(!userUid) return res.redirect("/login");
    const user = getUser(userUid);

    if(!user) return res.redirect("/login")


    req.user = user ;

    next();

}



async function checkAuth(req,res,next){

// const userUid = req.hearders["authorization"];
// const token = userUid.split("Bearer ") [1];  



    const userUid = req.cookies?.uid;

    const user = getUser(userUid);
   
    req.user = user ;

    next();

}



module.exports = {
    restrictToLoggedInUserOnly,
    checkAuth,
}