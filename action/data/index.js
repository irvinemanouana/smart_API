/**
 * Created by Christopher on 18/06/2016.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        showAll: require('./list') (app)
    };
};