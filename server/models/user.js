const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: Number,
    login: {
        type: String,
        min: 5,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        unique: true,
    },
    password: String,
    type: Boolean,
},
    {
        collection: 'users'
    });

module.exports = mongoose.model('User', UserSchema );





