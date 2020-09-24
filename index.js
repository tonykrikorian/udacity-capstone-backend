const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const port = 81;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
