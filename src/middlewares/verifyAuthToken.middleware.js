import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Você precisa de um token" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token Inválido" });
    }
    req.idz = decoded.id;
    req.isAdm = decoded.isAdm;
    next();
  });
};

export default verifyAuthTokenMiddleware;
