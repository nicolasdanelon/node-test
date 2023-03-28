const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require('multer');
const multerDir = multer({ dest: 'uploads/' });

const login = require("./login");
const search = require("./search");
const upload = require("./upload");

console.log("[INFO] Setting app dependecies...");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("static"));

app.get("/search", search);
app.post("/login", login);
app.post("/upload", multerDir.single('the_file'), upload);

app.listen(3000, function () {
  console.log("[INFO] Server is listening on port 3000");
});
