function upload(req, res) {
  console.log("[INFO] now uploading");

  console.log(req.file);

  res.status(201).json(req.file);
}

module.exports = upload
