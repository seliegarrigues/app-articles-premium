import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Bienvenue sur KeepConnect API ");
});
const port = process.env.PORT || 3000;
const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(` Serveur en cours d'exécution sur le port ${port}`);
  });
};
connectDB();
startServer();
