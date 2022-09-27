import jwt from "jsonwebtoken";

const verifyAdmAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (decoded.isAdm === false) {
      return res
        .status(401)
        .json({ message: "Você não tem autorização para isso." });
    }

    next();
  });
};

export default verifyAdmAuthTokenMiddleware;
