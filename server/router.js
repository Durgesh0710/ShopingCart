var express =require('express');
var userController=require('./userController');

var router= express.Router();
router.post('/postItem',userController.postValue);
router.get('/getAllItem',userController.getValue);
router.get('/getMobiles/:category',userController.getMobileValue);
router.get('/getJewellery/:category',userController.getTshirtValue);
router.get('/getTshirts/:category',userController.getJewelleryValue);
router.get('/getView/:id',userController.getItemView);

module.exports=router;
