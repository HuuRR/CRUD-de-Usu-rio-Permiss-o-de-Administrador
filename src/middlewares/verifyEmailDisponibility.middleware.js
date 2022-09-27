import users from "../db";

const verifyEmailDisponibility = (req, res, next) => {
  const { email } = req.body;

  const alreadyExists = users.find((user) => user.email === email);

  if (alreadyExists) {
    return res.status(400).json({ message: "Email já cadastrado." });
  }
  next();
};

export default verifyEmailDisponibility;
