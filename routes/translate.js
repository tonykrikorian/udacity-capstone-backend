const Router = require("express-promise-router");

const route = new Router();

route.get("/", async (req, res) => {
  return res.send("hhello");
});

module.exports = route;
