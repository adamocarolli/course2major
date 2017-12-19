const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Display index page here.');
});

// PROGRAM API
app.get('/api/programs', (req, res) => {
  res.status(200);
  res.send('GET /api/programs');
});

app.post('/api/programs', (req, res) => {
  res.status(201);
  res.send('POST /api/programs');
});

app.put('/api/programs/:id', (req, res) => {
  res.status(200);
  res.send(`PUT /api/programs/${req.params.id}`);
});

app.delete('/api/programs/:id', (req, res) => {
  res.status(204);
  res.send(`DELETE /api/programs/${req.params.id}`);
});

app.listen(3000, () => {
  console.log('listening on 3000'); // eslint-disable-line
});
