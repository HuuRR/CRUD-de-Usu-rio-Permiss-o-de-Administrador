import { Router } from "express";

import createuserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import profileUserController from "../controllers/profileUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import verifyAdmOrOwnerAuthTokenMiddleware from "../middlewares/verifiyAdmOrOwnerAuthToken.middleware";

import verifyAdmAuthTokenMiddleware from "../middlewares/verifyAdmAuthToken.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailDisponibility from "../middlewares/verifyEmailDisponibility.middleware";

export const router = Router();
export const login = Router();

router.post("", verifyEmailDisponibility, createuserController);
router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyAdmAuthTokenMiddleware,
  listUsersController
);
login.post("/login", userLoginController);
router.get("/profile", verifyAuthTokenMiddleware, profileUserController);
router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAdmOrOwnerAuthTokenMiddleware,
  updateUserController
);
router.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyAdmOrOwnerAuthTokenMiddleware,
  deleteUserController
);

// export default router;
