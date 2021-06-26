const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Express listening on http://localhost:${PORT}`);
});
