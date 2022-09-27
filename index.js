const express=require('express')
const { request } = require('http')
const path = require('path')
const app=express()
// const mongoose = require('mongoose');
const db=require('./cofig/mongoose')
const task=require('./models/to_do.js')
app.set('view engine','ejs')
app.set('view',path.join(__dirname,'views'))
app.get('/',function(req,res){
    task.find({},function(err,task){
        if(err){
            console.log('eroor in loading tasks',err);
            return;
        }
        else{
            task_list=task;
        }
    })
})







//starting the server
app.listen(8000,function(err){
    if(err){
        console.log('failed to start server',err);
    }
    else{
        console.log('server is up and running fon port',8000);
    }
})