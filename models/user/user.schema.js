const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email : {
    type : String,
    required : true,
  },

  phone_number : {
    type : String,
    required : true,
  },



  password : {
    type : String , 
    required : true,
  },
  
  account_status : {
    type : String , // VERIFIED , NOT VERIFIED
  }
},{
    timestamps : true
});

const User = mongoose.model('User', userSchema);

module.exports = User;