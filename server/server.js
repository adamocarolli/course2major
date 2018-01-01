const path = require('path');
const express = require('express');
const config = require('./config');

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

app.listen(config.port, () => {
  console.log('Express server is running!'); // eslint-disable-line
});
