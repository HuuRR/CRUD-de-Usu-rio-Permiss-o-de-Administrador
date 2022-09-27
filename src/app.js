import express from "express";
import { router, login } from "./routes/user.routes";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/users", router);
app.use("", login);

// app.get("/", (req, res) => {
//   return res.send("Primeira etapa concluída.");
// });

const server = app.listen(port);
module.exports = server;
