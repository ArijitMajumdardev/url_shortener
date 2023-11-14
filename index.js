const express = require('express')
const connectToMongoDB = require('./connection')
const path = require('path');
const { checkForAuthentication, restrictTo,} = require('./middlewares/auth')
const cookieParser = require("cookie-parser")




const urlRouter = require('./routes/url')
const staticRouter = require('./routes/staticRouters')
const userRouter = require('./routes/user')

const app = express();


connectToMongoDB('mongodb://url-mongodb:27017/short_url');
// connectToMongoDB('mongodb://127.0.0.1:27017/short_url');


//setting up the view engine

app.set('view engine', "ejs")
app.set("views", path.resolve('./views')) ;



app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthentication);


app.use("/",staticRouter);
app.use("/user",userRouter)
app.use("/url",restrictTo(["NORMAL"]),urlRouter);


const PORT = process.env.PORT || 8001;

app.listen(PORT,()=>{
    console.log("Server is on On port :"+PORT);
})