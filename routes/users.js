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
  
  router.post('/update/image',
      bodyparser,
      app.actions.user.update
  );
  
  router.post('/delete',
      bodyparser,
      app.actions.user.remove
  );

  router.post('/delete/user',
      bodyparser,
      app.actions.user.delete
  );
  

  return router;
};