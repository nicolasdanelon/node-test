const express = require("express");
const app = express();
const bodyParser = require("body-parser");

console.log("[INFO] Setting app dependecies...");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("static"));

app.get("/search", function(req, res) {
  const query = JSON.stringify(req.query.q);

  console.log(`[INFO] searching for ${query || null}`);

  if (!query || query == "") {
    console.log("[ERRO] no valid search parameter");
    return res.send({ error: "no valid search parameter" }).status(500);
  }

  return res.json({
    results: [
      { name: "algo", id: 4 },
      { name: "otro", id: 5 },
    ],
  });
});

app.post("/login", function(req, res) {
  console.log("[INFO] user login");
  console.table({
    user: req.body.email,
    pass: req.body.password,
  });

  res.json({ requestBody: req.body });
});

let server = app.listen(3000, function() {
  console.log("[INFO] Server is listening on port 3000");
});
