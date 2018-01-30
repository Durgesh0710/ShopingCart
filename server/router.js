var express =require('express');
var userController=require('./userController');

var router= express.Router();
router.get('/getAllItem',userController.getValue);
router.get('/getMobiles',userController.getValue);
router.get('/getJewellery',userController.getValue);
router.get('/getTshirts',userController.getValue);
router.get('/getView',userController.getItemView);

module.exports=router;
