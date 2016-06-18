var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {

  router.post('/create',
    bodyparser,
      app.actions.user.create
  );
  router.post('/login',
      bodyparser,
      app.actions.user.show
  );

  return router;
};