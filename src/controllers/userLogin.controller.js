import userLoginService from "../services/userLogin.service";

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  const userLogin = await userLoginService(email, password);
  if (userLogin === "Email ou senha inválidos") {
    return res.status(401).json({ message: "Email ou senha inválidos" });
  }
  return res.json(userLogin);
};
export default userLoginController;
