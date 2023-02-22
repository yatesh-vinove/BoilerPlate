const { i18next, middleware } = require("./utils/translation");
const { errors } = require("celebrate");
const express = require("express");
const app = express();
const cors = require("cors");
// Read Environment Variables from .env file
const dotenv = require("dotenv");
dotenv.config();

const config = require("./utils/config");
const logger = require("./utils/logger");
const port = process.env.PORT || config.PORT;
const morgan = require("morgan");
const jwtOps = require("./utils/jwt");

// MiddleWare
// const auth = require("./middleware/auth");

// routes file
const userRoutes = require("./routes/user");

// Translation of Messages to Native Language
app.use(middleware.handle(i18next));

//  Resource Sharing to Domains
app.use(cors());

// Serve Static File
app.use(express.static("./public"));

// For Query Param or Body Parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Http Request Logger
app.use(morgan("tiny"));

app.use(config.ROUTES.USER, userRoutes);

// Server Listening
app.listen(port, function () {
  logger.info(`Web Server Listening on ${port} port`);
});

// celebrate error handler
app.use(errors());
