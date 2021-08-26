var  express=require('express');
var app=express();

app.use('/admin',(req,res,next)=>{
    next('Unauthorized')
})

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.get('/about',(req,res)=>{
    res.send('about')
})
app.use((req,res,next)=>{
    res.send('Page not found!')
})

app.use((err,req,res,next)=>{
    res.send(err)
})

app.listen(3000,()=>{
   console.log('server is listening on port 3k');
})