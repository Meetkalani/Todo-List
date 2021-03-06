// Importing packages
const mongoose = require('mongoose');
const { todoSchema } = require('./todo');
const config = require('config');

// Database Connection String
mongoose.connect("mongodb+srv://admin:"+config.get('dbPassword')+"@cluster0.jcpjt.mongodb.net/todo?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false });
//mongoose.connect("mongodb://localhost/To-Do", { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false });

// Database Schema
let userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlength:1,
        maxlength:50
    },
    mail:{
        type:String,
        required:true,
        minlength:1,
        maxlength:50
    },
    password: {
        type: String,
        required:true,
        minlength: 6,
        maxlength:255
    },
    todo:[todoSchema]
})

// Exporting Model
module.exports = mongoose.model('user', userSchema);