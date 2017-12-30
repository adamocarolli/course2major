const path = require('path');
const express = require('express');

const indexRoutes = require('./routes/index');
const programsRoutes = require('./routes/api/programs');

const app = express();

// VIEW ENGINE
app.set('view engine', 'html');

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client')));

// ROUTES
app.use('/', indexRoutes);
app.use('/', programsRoutes);

app.listen(3000, () => {
  console.log('listening on 3000'); // eslint-disable-line
});
