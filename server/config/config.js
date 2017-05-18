'use strict';

const Dotenv = require('dotenv');

module.exports = class Config {

  constructor(env) {
    if (!env || env === 'development') {
      Dotenv.config();
    }

    this.env = env;

    const {PORT, REQUEST_LOG, MONGO_URI, JWT_SECRET} = process.env;

    this.port = PORT;
    this.log = REQUEST_LOG;

    this.mongoUri = MONGO_URI;

    this.jwtSecret = JWT_SECRET;
  }
};
