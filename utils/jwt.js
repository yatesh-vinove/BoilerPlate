const jwt = require("jsonwebtoken");
const { JWT_KEY } = process.env;

const tokenOperations = {
  generateJWT: function (id) {
    var token = jwt.sign({ userId: id }, JWT_KEY, {
      expiresIn: '1d',
    });
    return token;
  },
};

module.exports = tokenOperations;
