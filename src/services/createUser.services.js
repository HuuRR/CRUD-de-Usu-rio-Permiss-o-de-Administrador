import users from "../db";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = new Date();
  const newUser = {
    email,
    name,
    password: hashedPassword,
    isAdm,
    createdOn: data,
    updatedOn: data,
    id: uuidv4(),
  };

  users.push(newUser);

  const newUserNoHash = {
    email,
    name,
    isAdm,
    createdOn: data,
    updatedOn: data,
    id: uuidv4(),
  };

  return newUserNoHash;
};

export default createUserService;
