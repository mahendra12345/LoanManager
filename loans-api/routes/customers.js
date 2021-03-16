var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const customerModel = require('../models/customers.model');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  customerModel.find(function(err,customerDetailResponse){
    res.send(customerDetailResponse);
  });

});

router.get('/view', function(req, res, next) {
     const userId = req.query.userId;
  customerModel.findById(userId,function(err,customerResponse){
    res.send(customerResponse);
  });

});

router.post('/add', function(req, res, next) {
            let firstname= req.body.firstname;
            let lastname= req.body.lastname;
            let emailaddress= req.body.emailaddress;
            let phonenumber= req.body.phonenumber;
            let dob= req.body.dob;
 
    let customerObj = new customerModel({       
    firstname:firstname,
    lastname:lastname,
    emailaddress:emailaddress,
    phonenumber:phonenumber,
    dob:dob
    });

     customerObj.save(function(err,customerObj){
         if(err){
            res.send({'status':500,'message':'unable to insert'});
         }else{
            res.send({'status':200,'message':'Data inserted successfully!!','customerDetails':customerObj});
         }

     });

    
  });

  router.put('/update', function(req, res, next) {
    const userId = req.body.userId;
    let firstname= req.body.firstname;
    let lastname= req.body.lastname;
    let emailaddress= req.body.emailaddress;
    let phonenumber= req.body.phonenumber;
    let dob= req.body.dob;

let customerObj ={       
firstname:firstname,
lastname:lastname,
emailaddress:emailaddress,
phonenumber:phonenumber,
dob:dob
};


  
    customerModel.findByIdAndUpdate(userId,customerObj,function(err,customerResponse){
      res.send({'message':'Customer Is Updated Successfully!!',
      'customerResponse':customerResponse});
    });
  
  });

  router.delete('/delete', function(req, res, next) {
    const userId = req.query.userId;
    customerModel.findByIdAndDelete(userId,function(err,customerResponse){
      res.send({'message':'Customer Is deleted Successfully!!',
      'customerResponse':customerResponse});
    });
  
  });
  router.get('/search', function(req, res, next) {
    res.send('respond with a resource');
  });
module.exports = router;
