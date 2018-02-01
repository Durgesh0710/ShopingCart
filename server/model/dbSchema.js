var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var DataFile=new Schema({
	id: Number,
	description:String,
	category:String,
	image:String,
	cost:Number,
	features: {type:Array, default: []},

});

var Data=mongoose.model('Data',DataFile);

module.exports =Data;