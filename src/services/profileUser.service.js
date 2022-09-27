import users from "../db";

const profileUserService = (id) => {
  const user = users.find((user) => user.id === id);
  const profile = {
    email: user.email,
    name: user.name,
    //password: user.password,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
    id,
  };

  return profile;
};

export default profileUserService;
