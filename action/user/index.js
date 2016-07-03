/**
 * Created by Christopher on 15/05/2016.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        show: require('./return')(app),
        update:require('./update')(app)
        /*remove: require('./remove')(app),
        show: require('./show')(app),
        list: require('./list')(app)*/
    };
};