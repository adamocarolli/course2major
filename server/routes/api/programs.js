const router = require('express').Router();

router.get('/api/programs', (req, res) => {
  res.status(200);
  res.send('GET /api/programs');
});

router.post('/api/programs', (req, res) => {
  res.status(201);
  res.send('POST /api/programs');
});

router.put('/api/programs/:id', (req, res) => {
  res.status(200);
  res.send(`PUT /api/programs/${req.params.id}`);
});

router.delete('/api/programs/:id', (req, res) => {
  res.status(204);
  res.send(`DELETE /api/programs/${req.params.id}`);
});

module.exports = router;
