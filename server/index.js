var express= require('express');
var path=require('path');
var bodyparser=require('body-parser');
var filepath=path.join(__dirname,'../client/public');
var app=express();
app.use(express.static(filepath));

app.use(bodyparser.json());
app.get('/',function(req,res){
	res.sendFile(filepath+'/index.js');
});
app.use("/",require('./router'));



app.listen(5018);
