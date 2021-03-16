const mongoose = require('mongoose');

const loanSchema= mongoose.Schema({

    loanname:String,
    loantype:String,
    loanamount:String,
    loanissuedate:Date,
    loanstatus:String

});


const loanModel = mongoose.model('loans',loanSchema);
module.exports=loanModel;