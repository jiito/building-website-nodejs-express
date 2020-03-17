const express = require('express');

const router = express.Router();

module.exports = params => {
  const { speakerService } = params;
  // serve a static file
  router.get('/', async (request, response) => {
    const speakers = await speakerService.getList();
    return response.json(speakers);
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
