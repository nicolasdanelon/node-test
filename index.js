const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const login = require("./login");
const search = require("./search");

console.log("[INFO] Setting app dependecies...");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("static"));

app.get("/search", search);

// req = Request, res = Response
app.post("/login", login);

app.listen(3000, function () {
  console.log("[INFO] Server is listening on port 3000");
});
