var express=require('express');
var app=express();
var logger=require('morgan');
var cookie=require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'))

app.use(logger('dev'))
app.use(cookie())

app.use((req,res,next)=>{
    res.cookie('ass',1)
    next()
})

app.use('/admin',(req,res,next)=>{
    next('Unauthorized')
})


app.get('/',(req,res)=>{
   res.send('<h2>Welcome to express</h2>')
})


app.get('/about',(req,res)=>{
    res.send('My name is qwerty')
})

app.post('/form',(req,res)=>{
    res.send(req.body)
})

app.post('/json',(req,res)=>{
    res.send(req.body)
})

app.get('/user/:username',(req,res)=>{
    var username=req.params.username;
    res.send(username)
})

app.use((req,res,next)=>{
    res.send('Page not found')
})

app.use((err,req,res,next)=>{
    res.send(err)
})





app.listen(3000,()=>{
    console.log('server is listening on port 3k')
})