import updateUserService from "../services/updateUser.service";

const updateUserController = async (req, res) => {
  const { email, name, password } = req.body;
  const { id } = req.params;

  const updatedUser = await updateUserService(email, name, password, id);

  return res.json(updatedUser);
};

export default updateUserController;
