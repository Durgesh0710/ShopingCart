var express= require('express');

var bodyparser=require('body-parser');

var app=express();
app.use(bodyparser.json());
app.use("/",require('./router'));



app.listen(5018);
