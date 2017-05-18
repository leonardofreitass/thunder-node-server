'use strict';

const _ = require('lodash');
const DCDriver = require('dream-cheeky-windows-driver');

const LauncherActions = require('./constants/launcher_actions');

const findAction = (key) => {

  return _.find(LauncherActions, { key });
};

const listActions = () => {

  return _.map(LauncherActions, ({key, name}) => ({key, name}));
};

const executeAction = (key) => {

  const action = findAction(key);
  return new Promise((resolve, reject) => {

    try{

      DCDriver.chain(action.chain, resolve);
    }
    catch(e){

      reject(e);
    }
  });
};

module.exports = {findAction, listActions, executeAction};
