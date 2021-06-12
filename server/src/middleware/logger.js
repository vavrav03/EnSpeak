const morgan = require("morgan");
const chalk = require("chalk");

const logger = morgan(function (tokens, req, res) {
   var status = tokens.status(req, res);
   var statusColor =
      status >= 500 ? "red" : status >= 400 ? "yellow" : status >= 300 ? "cyan" : "green";

   return (
      chalk.reset(padRight(tokens.method(req, res) + " " + tokens.url(req, res), 30)) +
      " " +
      chalk[statusColor](status) +
      " " +
      chalk.reset(padLeft(tokens["response-time"](req, res) + " ms", 8)) +
      " " +
      chalk.reset("-") +
      " " +
      chalk(new Date().toLocaleTimeString())
   );
});

function padLeft(str, len) {
   return len > str.length ? new Array(len - str.length + 1).join(" ") + str : str;
}
function padRight(str, len) {
   return len > str.length ? str + new Array(len - str.length + 1).join(" ") : str;
}

module.exports = {
   logger
}
