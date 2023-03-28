function login(req, res) {
    console.log("[INFO] User login");
    console.table({
        user: req.body.email,
        pass: req.body.password,
    });

    return res.json({ requestBody: req.body });
}

module.exports = login
