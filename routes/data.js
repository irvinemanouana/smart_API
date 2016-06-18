/**
 * Created by Christopher on 18/06/2016.
 */
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.post('/create',
        bodyparser,
        app.actions.bottle.create
    );
    return router;
}