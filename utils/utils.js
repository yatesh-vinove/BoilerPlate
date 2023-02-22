const utils = {
  res: {
    success: (response, message, data) => {
      
      response.json({ message, code: 200, success: true, data });
    },
    fail: (response, message, data) => {
      response.json({ message, code: 500, success: false, data });
    },
    unauthorized: (response, message, data) => {
      message = message || "Access Denied";
      response.json({ message, code: 401, success: false, data });
    },
    taken: (response, message, data) => {
      response.json({ message, code: 422, success: false, data });
    },
    unknown: (response, message, data) => {
      message = message || "Invalid Parameters";
      response.json({ message, code: 400, success: false, data });
    },
    notfound: (response, message, data) => {
      response.json({ message, code: 404, success: false, data });
    },
  },
};

module.exports = utils;
