const { getUser } = require("../service/auth");

// async function restrictToLoggedInUserOnly(req,res,next){
//     const userUid = req.cookies?.uid;
//     if(!userUid) return res.redirect("/login");
//     const user = getUser(userUid);

//     if(!user) return res.redirect("/login")

//     req.user = user ;

//     next();

// }



// async function checkAuth(req,res,next){

// // const userUid = req.hearders["authorization"];
// // const token = userUid.split("Bearer ") [1];  
//     const userUid = req.cookies?.uid;

//     const user = getUser(userUid);
   
//     req.user = user ;

//     next();

// }


function checkForAuthentication( req, res, next){
    const token = req.cookies?.token;

    if(!token) return next();

    const user = getUser(token);

    req.user = user ;
    next()
    
}

function restrictTo(roles = []){

    return function (req,res,next){
        if(!req.user) return res.redirect("/login");

        if(!roles.includes(req.user.role)) return res.end("Unauthorized");

        return next();
    }

}



module.exports = {
    checkForAuthentication,
    restrictTo,
}