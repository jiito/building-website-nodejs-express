const express = require('express');

// add routes
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');
const router = express.Router();

module.exports = () => {
  // serve a static file
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  // mount routing handlers
  router.use('/speakers', speakersRoute());
  router.use('feedback', feedbackRoute());

  return router;
};
