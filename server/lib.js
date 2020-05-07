let mongoose = require('mongoose');
const user = require('./models/user');
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
);
let library ={
    Register: function(request, response)  {
      var userObj =   {
           login: request.body.login,
          email: request.body.email,
          password: request.body.pass
       };
       user.create(request.body, (error, data) => {
           if (error) {
            console.log(error);
           }
           else {
               console.log(data);
               res.json(data);
           }
       })
    },
    Connect: function (request, response) {

    }
};

module.exports = library;