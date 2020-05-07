let mongoose = require('mongoose');
const User = require('./models/user');
const database = require('./database/db');


mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database connected sucessfully !')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)
let library ={
    Register: function(request, response)  {
        let login = request.body.login;
        let email = request.body.email;
        let password = request.body.password;
        let passwordConfirm = request.body.passwordConfirm
    },
    Connect: function (request, response) {

    }
};

module.exports = library;