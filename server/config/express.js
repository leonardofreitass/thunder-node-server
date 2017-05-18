'use strict';

const Express = require('express');
const Morgan = require('morgan');
const Helmet = require('helmet');

const Logger = require('../lib/logger');

module.exports = class ExpressConfig {

  constructor(config) {

    this.app = Express();

    this.setup(config);
  }

  setup(config){

    this.app.use(Express.static('./public'));
    this.app.set('view engine', 'pug');
    this.app.set('views', './server/views');

    this.app.use(Morgan(config.log, { stream: Logger.stream }));

    this.app.use(Helmet());
    this.app.use(Helmet.xssFilter());
    this.app.disable('x-power-by');
    this.app.use(Helmet.hidePoweredBy({setTo:'PHP 5.5.14'}));
  }
};
