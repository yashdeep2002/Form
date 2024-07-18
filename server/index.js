const express= require('express')
const app= express();
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');

require('dotenv').config();
require('./Models/db')



app.use(express.json())
app.use(cors())

//app.post('/signup',(req,res)=>{
 // console.log(req.body)
 // res.send("hello");
//})

app.use('/auth',AuthRouter);

app.listen(5000,()=>console.log("server is running"))