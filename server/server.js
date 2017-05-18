'use strict';

const Config = require('./config/config');
const ExpressConfig = require('./config/express');

const Logger = require('./lib/logger');

const {MainRoutes} = require('./routes/');

module.exports = class Server {

  static bootstrap() {
    return new Server();
  }

  constructor() {
    this.config = new Config(process.env.NODE_ENV);
    this.app = new ExpressConfig(this.config).app;

    this.routes();
  }

  routes(){

    this.app.use(MainRoutes);
  }

  start(){
    return this.app.listen(this.config.port, () => {

      Logger.info(`Server running at: localhost:${this.config.port}`);
    });
  }
};
