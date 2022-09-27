const mongoose=require('mongoose');
const toDOschema=new mongoose.Schema({
    descri:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})

const task=mongoose.model('task',toDOschema);
module.exports=task;