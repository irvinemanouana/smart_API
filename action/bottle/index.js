/**
 * Created by Christopher on 16/06/2016.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        owner: require('./update')(app),
        get: require('./getBottle')(app)
        //update: require('./update')(app)
        //show: require('./return')(app)
    };
};