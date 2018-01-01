const config = {
  port: process.env.PORT || 5000,
  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/course2major',
};

module.exports = config;
