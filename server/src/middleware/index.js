const authFile = require('./auth');
const loggerFile = require('./logger')

module.exports = {
   requireAuth: authFile.requireAuth,
   logger: loggerFile.logger
};
