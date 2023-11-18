const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/exchanges';

mongoose.connect(MONGODB_URI).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log("Connection Failed",err);
})
