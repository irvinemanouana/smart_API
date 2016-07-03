module.exports = function (app) {
  app.use('/user',require('./users')(app));
  app.use('/bottle',require('./bottle')(app));
  app.use('/data',require('./data')(app));
};