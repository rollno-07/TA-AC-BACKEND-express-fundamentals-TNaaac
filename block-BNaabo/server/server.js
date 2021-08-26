var express=require('express');
var app=express();

app.use(express.json());

app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname +'/public'))



app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.post('/contact',(req,res)=>{
    console.log(req.body)
})
app.post('/json',(req,res)=>{
    console.log(req.body)
})



app.listen(3000,()=>{
  console.log('server is listening on port 3k')
})