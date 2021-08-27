var express=require('express');
var app=express();
var logger= require('morgan')

app.use(express.json())
app.use(express.static(__dirname+'/public'))


app.use(logger('dev'))


app.get('/',(req,res)=>{
    res.send('welcome')
})

app.post('/json',(req,res)=>{
    res.send(req.body)
})

app.listen(3000,()=>{
    console.log('server is listening on port 3k');
})