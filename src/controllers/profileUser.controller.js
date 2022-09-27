import jwt from "jsonwebtoken";
import profileUserService from "../services/profileUser.service";

const profileUserController = (req, res) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    const profile = profileUserService(decoded.id);

    return res.json(profile);
  });
};

export default profileUserController;
