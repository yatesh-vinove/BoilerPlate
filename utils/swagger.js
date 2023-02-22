const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BoilerPlate for Node JS",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./app.js"],
};
const swaggerSpec = swaggerJsDoc(options);

// Swagger
// app.use(
//   "/api-docs",
//   swaggerUiExpress.serve,
//   swaggerUiExpress.setup(swaggerSpec)
// );
// /**
//  * @swagger
//  * /:
//  * get:
//  *    summary:  sdvdfvdfv
//  *    description: dbdfvdfvdf
//  *    responses:
//  *          200 :
//  *              description: vdfvdfvfdv
//  */

