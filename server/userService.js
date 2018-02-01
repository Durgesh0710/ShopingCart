require('./model/db.js');
var Data=require('./model/dbSchema.js');
var Q=require('q');
exports.insertValue= function(items){
	Data.collection.insertMany(items,function(err,r){});
}

exports.getResult=function(){
	var deferred= Q.defer();
	Data.find({}, function(err,data){		
		deferred.resolve(data);
	});	
	return deferred.promise;


}
