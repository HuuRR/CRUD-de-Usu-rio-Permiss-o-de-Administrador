import listUsersService from "../services/listUsers.service";

const listUsersController = (req, res) => {
  const users = listUsersService();
  //console.log(req.id);
  return res.json(users);
};

export default listUsersController;
