const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// Import requried modules
const config = require('./config');
const data = require('./data');

// Import required routes
const indexRoutes = require('./routes/index');
const programsRoutes = require('./routes/api/programs');

const app = express();

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

mongoose.connect(config.mongoURL, (error) => {
  if (error) throw error;

  // Load initial data into mongo database
  data.load();
});

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
