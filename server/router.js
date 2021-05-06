const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("app is up");
});

module.exports = router;
