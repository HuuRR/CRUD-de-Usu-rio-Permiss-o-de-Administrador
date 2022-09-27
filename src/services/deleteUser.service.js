import users from "../db";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((elem) => elem.id === id);

  if (userIndex === -1) {
    return { message: "Usuário não encontrado" };
  }

  users.splice(userIndex, 1);
  return { message: "Usuário deletado com Sucesso" };
};

export default deleteUserService;
