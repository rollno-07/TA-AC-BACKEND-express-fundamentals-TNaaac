var express= require('express')
var logger= require('morgan')
var cookie=require('cookie-parser')

var app=express();

app.use(logger('dev'));
app.use(cookie())


app.use((req,res,next)=>{
    res.cookie('UserName','Vivek')

    next();
})

app.get('/about',(req,res)=>{
    res.send("Welcome to About")
})

app.listen(3000,()=>{
    console.log('server is listening on port 3k')
})





