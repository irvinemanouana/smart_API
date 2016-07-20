/**
 * Created by Christopher on 15/05/2016.
 */
var mongoose = require('mongoose');

var uri = 'mongodb://localhost:27017/smart';
module.exports = function (app) {
    app.mongoose = mongoose.connect(uri,function (err,db) {
        if (err)
            console.log('Unable to connect to the mongoDB server. Error: ',err);
        else
            console.log('Connection established to', uri);
    });
    app.model = {};
    app.model.user = require('./user')(app);
    app.model.bottle = require('./bottle')(app);
    app.model.data = require('./data')(app);

};