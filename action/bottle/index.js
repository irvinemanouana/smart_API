/**
 * Created by Christopher on 16/06/2016.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        //show: require('./return')(app)
    };
};