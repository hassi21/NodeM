const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      hello: req.body.token || "no token",
      message: "Auth failed lallayo",
      error: error,
    });
  }
};
