import users from "../db";
import * as bcrypt from "bcrypt";

const updateUserService = async (email, name, password, id) => {
  const attData = new Date();

  const hashedPassword = password;

  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  const user = users.find((user) => user.id === id);

  const returnObj = {
    email: email || user.email,
    name: name || user.name,
    updatedOn: attData,
    id: id,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
  };

  const userUpdate = {
    email: email || user.email,
    name: name || user.name,
    password: hashedPassword || user.password,
    updatedOn: attData,
    id: id,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
  };

  const userIndex = users.findIndex((elem) => elem.id === id);

  if (userIndex === -1) {
    return "Usuário não Encontrado";
  }

  users[userIndex] = userUpdate;

  return returnObj;
};

export default updateUserService;
