const express = require('express');

// add routes
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = params => {
  const { speakerService } = params;

  // serve a static file

  router.get('/', async (request, response) => {
    const topSpeakers = await speakerService.getList();
    console.log(topSpeakers);
    response.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers });
  });

  // mount routing handlers
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
