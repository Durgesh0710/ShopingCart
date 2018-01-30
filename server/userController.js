var userService=require('./userService');
var store;
var obj={
	getValue: function(req,res){
		
		res.set('Access-Control-Allow-Origin', '*');

		res.send(userService);
	},
	getItemView: function(req,res){
		res.set('Access-Control-Allow-Origin', '*');
		res.send(req.query.id);
	}
	

}
module.exports=obj;
