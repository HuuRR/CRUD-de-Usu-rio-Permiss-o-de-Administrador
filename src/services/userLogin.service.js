import users from "../db";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

const userLoginService = async (email, password) => {
  const user = users.find((elem) => elem.email === email);
  //console.log(user);
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!user) {
    return "Email ou senha inválidos";
  } else if (passwordMatch === false) {
    return "Email ou senha inválidos";
  }

  const token = jwt.sign(
    { email: email, isAdm: user.isAdm, id: user.id },
    "SECRET_KEY",
    {
      expiresIn: "24h",
    }
  );

  return { token };
};

export default userLoginService;
