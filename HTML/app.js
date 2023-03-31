const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const router=express.Router();

var dir=__dirname+'/public/';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"))

router.use(function (req,res,next) {
    next();
});

router.get('/',(req,res)=>{
    res.render(dir+'main.ejs')
});

router.get('/avbl-mentors',(req,res)=>{
    res.render(dir+'mentors.ejs')
});

router.get('/my-mentors',(req,res)=>{
    res.render(dir+'mymentors.ejs')
});

router.get('/vouch',(req,res)=>{
    res.render(dir+'vouch.ejs')
});

app.use('/',router)

app.listen(process.env.port||3000)