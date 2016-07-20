/**
 * Created by Christopher on 15/05/2016.
 */
module.exports = function (app) {
    app.actions ={};
    app.actions.user= require('./user')(app);
    app.actions.bottle= require('./bottle')(app);
    app.actions.data= require('./data')(app);
}
