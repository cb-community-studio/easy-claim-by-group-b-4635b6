const users = require("./users/users.service.js");
const claim = require("./claim/claim.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(claim);
  // ~cb-add-configure-service-name~
};
