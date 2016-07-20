/**
 * Created by Christopher on 16/06/2016.
 */
var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.post('/create',
        bodyparser,
        app.actions.bottle.create
    );
    router.post('/update',
        bodyparser,
        app.actions.bottle.owner
    );

    router.post('/get',
        bodyparser,
        app.actions.bottle.get
    );
    return router;
}