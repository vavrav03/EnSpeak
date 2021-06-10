const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const chalk = require("chalk");

require("./src/config/environment");
require("./src/database");

const routes = require("./src/routes/index");
const configPassport = require("./src/passport/passport-config");

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

//https://github.com/expressjs/morgan/issues/53
app.use(
   morgan(function (tokens, req, res) {
      var status = tokens.status(req, res);
      var statusColor =
         status >= 500
            ? "red"
            : status >= 400
            ? "yellow"
            : status >= 300
            ? "cyan"
            : "green";

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
   })
);

function padLeft(str, len) {
   return len > str.length ? new Array(len - str.length + 1).join(" ") + str : str;
}
function padRight(str, len) {
   return len > str.length ? str + new Array(len - str.length + 1).join(" ") : str;
}

configPassport(app, express);

app.use("/", routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
