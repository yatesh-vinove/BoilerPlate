const router = require("express").Router();
// const UserModel = require('../models/user.model');
const logger = require("../utils/logger");
const utils = require("../utils/utils");
const config = require("../utils/config");
const { celebrate, Joi, Segments } = require("celebrate");
// const { doLogin, doSignUp } = require("../controllers/user");
const userClass = require('../controllers/user');
let user = new userClass();
const { LOGIN, SIGNUP } = config.ROUTES;

router.post(
  LOGIN,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  async (req, res) => {
    logger.debug("route > login");
    const { username, password } = req.body;
    if (username && password) user.doLogin(req, res);
    else return utils.res.fail(res);
  }
);

router.post(
  SIGNUP,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .min(8),
    }),
  }),
  async (req, res) => {
    logger.debug("route > register");
    doSignUp(req, res);
  }
);

module.exports = router;
