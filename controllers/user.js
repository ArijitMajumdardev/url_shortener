const User = require('../models/user')
const {v4 : uuidv4} = require('uuid')

const {setUser} = require('../service/auth')





// handling the signup of the user
async function handleSingUp(req,res){
    const {name , email , password} = req.body;
    
    
    await User.create({
        name,
        email,
        password,

    })

    res.redirect('/');

}


// finding the user from the user collection from the db , if the user is not found redirect to the login page, if the user is found keep a record of the user and session id  in a map and then setting the cookie , and then redirecting to the home page

async function handleLogin(req,res){
    
        const {email,password} = req.body;

      const user = await User.findOne({email,password,})

     if(!user){
        return res.render('login',{
            error : "Invalid email or password"

        })
     }
      
    //  const sessionId = uuidv4();
     const token = setUser(user)
     res.cookie("token",token)

            // res.json({token});
     return res.redirect('/');
}





 
module.exports = {
    handleSingUp,
    handleLogin
}