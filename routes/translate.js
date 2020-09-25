const Router = require("express-promise-router");
const translationService = require("../services/translation");
const route = new Router();

route.post("/", async (req, res) => {
  const { message, fromLanguage, toLanguage } = req.body;
  const traducciones = await translationService(
    message,
    fromLanguage,
    toLanguage
  );
  return res.send(traducciones);
});

route.get("/languages", async (req, res) => {});
module.exports = route;
