const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model("User",{
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email not valid");
            }

        }

    },
    password:{
        type:String,
        required:true,
        minLength:6,
        trim:true,
        validate(value){
            if(value.includes("password")){
                throw new Error("Password can't contain password as a string");
            }
        }

    },
    age:{
        type:Number,
        default: 1,
        validate(value){
            if(value > 1){
                throw new Error("Age is invalid");
            }
        }
    }

});

module.exports = User;