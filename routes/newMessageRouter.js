const { Router } = require('express');

newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
  res.render('form');
});

module.exports = newMessageRouter;
