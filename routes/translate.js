const Router = require("express-promise-router");
const translationService = require("../services/translation");
const route = new Router();

route.get("/", async (req, res) => {
  translationService();
  return res.send("hhello");
});

module.exports = route;
