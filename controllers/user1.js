const logger = require("../utils/logger");
const utils = require("../utils/utils");
const config = require("../utils/config");
const bcrypt = require("bcrypt");

const doLogin = async (req, res) => {
  logger.debug("controller > doLogin");
  try {
    const { username, password } = req.body;
    
    // Database Call
    // const user = await User.findOne({
    //   username,
    // });

    if (!user) {
      return utils.res.notfound(res, req.t("invalid_email_password"));
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return utils.res.success(res, req.t("user_login_success"), user);
    }
    return utils.res.notfound(res, req.t("invalid_email_password"));
  } catch (e) {
    logger.error(e);
    return utils.res.fail(res, req.t("something_went_wrong"));
  }
};

const doSignUp = async (req, res) => {
  logger.debug("controller > doSignUp");
  try {
    const { fname, lname, email, password } = req.body;

    // Database Call
    // const user = await User.findOne({
    //   username,
    // });

    if (user) {
      return utils.taken(res, req.t("data_already_exist"));
    }
    const { SALT_ROUNDS } = config;
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = bcrypt.hashSync(password, salt);
    password = hash;
    // Database Call for Inserting Record
    // const newUser = await User.insertOne({fname, lname, email, password});
    return utils.res.success(res, req.t("user_register_success"), newUser);
  } catch (e) {
    logger.error(e);
    return utils.res.fail(res, req.t("something_went_wrong"));
  }
};

module.exports = { doLogin, doSignUp };
