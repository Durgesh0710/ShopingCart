var userService=require('./userService');

var obj={
	getValue: function(req,res){
		userService.getResult().then(function(data){
			res.send(data);
		});			
	},
	getMobileValue: function(req,res){	
		var i;
		var arr=[];
		userService.getResult().then(function(data){
			for(i=0;i<data.length;i++){
				if(data[i].category==req.params.category){
					arr.push(data[i]);
				}
			}
		res.send(arr);
		});
	},
	getTshirtValue: function(req,res){
		var i;
		var arr=[];
		userService.getResult().then(function(data){
			for(i=0;i<data.length;i++){
				if(data[i].category==req.params.category){
					arr.push(data[i]);
				}
			}
		res.send(arr);
		});
	},
	getJewelleryValue: function(req,res){
		var i;
		var arr=[];
		userService.getResult().then(function(data){
			for(i=0;i<data.length;i++){
				if(data[i].category==req.params.category){
					arr.push(data[i]);
				}
			}
		res.send(arr);
		});
	},
	getItemView: function(req,res){
		var i;
		var arr=[];
		
		userService.getResult().then(function(data){
			for(i=0;i<data.length;i++){
				if(data[i].category==req.params.id){
					arr.push(data[i]);
				}
			}
		res.send(arr);
		});
	},
	postValue: function(req,res){
		console.log(req.body);
		userService.insertValue(req.body);
		res.send("Done!!");
	}
	

}
module.exports=obj;
