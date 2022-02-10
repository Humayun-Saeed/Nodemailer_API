var express=require('express')
const { attachment } = require('express/lib/response')
var nodemailer=require('nodemailer')
require('dotenv').config()
var app=express()
app.use(express.json())
app.post('/email',(req,res)=>{
const transport=nodemailer.createTransport({

service:'gmail',
auth:{
    user:'humayunsaeed267@gmail.com',
    pass:process.env.password
}

})
var mailoptions={

    from:'humayunsaeed@gmail.com',
to:'shahjahanmukhtar62@gmail.com',
subject:'Test',
//text:"hello how are you",
html:"<a href='hacked '>Click Here</a>",
}
transport.sendMail(mailoptions,function(err,info){
if(err){console.log(err);}
else{
    console.log("email send"+info.response);
}


})
})
app.listen(30000,()=>{
    console.log("server is runnnig at this port: ");
})