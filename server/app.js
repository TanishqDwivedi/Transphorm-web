// Import All Dependencies
const express = require ('express');
const app = express();
const port = 8001;
const mongoose = require('mongoose');
const config = require ('./config/database');
const connection = mongoose.connect(config.database, {
  useNewUrlParser: true, useUnifiedTopology: true });
if(connection){
console.log("database connected");
}
else{
console.log("database connection error");
}
app.get("/",function(req,res){
    res.end("hello world");
})
app.listen(port,function(){
    console.log("Server is listening at " + port);
});
