const mongoose = require('mongoose');
mongoose.connect(mongoose.connect('mongodb://localhost:27017/test'))
const db = mongoose.connection;
db,on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log("successfully runnig mongoose");
})