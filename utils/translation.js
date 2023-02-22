const path = require("path");
const i18next = require("i18next");
const backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");

const filePath = path.join(__dirname, "/../locales/{{lng}}/translation.json");

i18next
  .use(backend)
  .use(middleware.LanguageDetector)
  .init({
    
    fallbackLng: 'tr',
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
  });

module.exports = { i18next, middleware, backend };
