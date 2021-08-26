var express=require('express')
var app=express();
var logger=require('morgan');
var cookie=require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));

app.use(logger('dev'));
app.use(cookie());

app.use('/admin',(req,res,next)=>{
    next('Unauthorized')
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/blog.html',(req,res)=>{
    res.sendFile(__dirname+'/blog.html')
})
app.get('/services.html',(req,res)=>{
    res.sendFile(__dirname+'/services.html')
})
app.get('/cases.html',(req,res)=>{
    res.sendFile(__dirname+'/cases.html')
})
app.get('/contact.html',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})
app.get('/about.html',(req,res)=>{
    res.sendFile(__dirname+'/about.html')
})

app.use((req,res,next)=>{
    res.send('page not found')
    next()
})
app.use((err,req,res,next)=>{
    res.send(err)
})

app.listen(4000,()=>{
    console.log("serverlistening on port 4k");
})


