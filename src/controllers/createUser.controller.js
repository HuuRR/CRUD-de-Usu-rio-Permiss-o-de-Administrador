import createUserService from "../services/createUser.services";

const createuserController = async (req, res) => {
  const { email, name, password, isAdm } = req.body;

  const user = await createUserService(email, name, password, isAdm);

  return res.status(201).json(user);
};

export default createuserController;
