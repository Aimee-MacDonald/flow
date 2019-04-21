require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/static/pages/index.html");
});

app.listen(process.env.PORT, () => {
  console.log("Server Listening");
});
