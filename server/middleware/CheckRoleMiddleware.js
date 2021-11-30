const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const [, token] = req.headers.authorization.split(" ");
      if (!token) {
        return res.status(401).json({ message: "Not registered user" });
      }

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "You have not access" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ message: "Not registred" });
    }
  };
};
