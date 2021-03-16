const mongoose = require('mongoose');

const customerSchema= mongoose.Schema({
    firstname:String,
    lastname:String,
    emailaddress:String,
    phonenumber:String,
    dob:String

});

const customerModel=mongoose.model('customers',customerSchema);
module.exports = customerModel;