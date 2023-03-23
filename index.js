const express = require("express");
const app = express();
const bodyParser = require("body-parser");

console.log("[INFO] Setting app dependecies...");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("static"));

app.get("/search", function (req, res) {
  // QUERY STRING
  const query = JSON.stringify(req.query.q);
  console.log(`[INFO] Searching for ${query || null}`);

  if (query == "") {
    console.log("[ERRO] No valid search parameter");
    return res.send({ error: "no valid search parameter" }).status(404);
  }

  return res.json({
    results: [
      { name: "algo", id: 4 },
      { name: "otro", id: 5 },
    ],
  });
});

// req = Request, res = Response
app.post("/login", function (req, res) {
  console.log("[INFO] User login");
  console.table({
    user: req.body.email,
    pass: req.body.password,
  });

  return res.json({ requestBody: req.body });
});

let server = app.listen(3000, function () {
  console.log("[INFO] Server is listening on port 3000");
});
