const verifyAdmOrOwnerAuthTokenMiddleware = (req, res, next) => {
  const { idz, isAdm } = req;
  const { id } = req.params;

  if (!isAdm && idz !== id) {
    return res
      .status(401)
      .json({ message: "Você não tem autorização para isso." });
  }
  next();
};

export default verifyAdmOrOwnerAuthTokenMiddleware;
