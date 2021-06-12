const path = require(`sexy-require`)
require("dotenv").config({path: "src/config/.env"})
const express = require("express");
const bodyParser = require("body-parser");

require("/src/config/environment");
require("/src/database");

const routes = require("/src/routes/index");
const configPassport = require("/src/middleware/passport/passport-config");
const middlewares = require("/src/middleware/index");

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

//https://github.com/expressjs/morgan/issues/53
app.use(middlewares.logger);

configPassport(app, express);
app.use("/", routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
