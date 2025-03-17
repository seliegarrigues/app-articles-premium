import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`projet connecté à Mongoose: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erreur de connexion à MongoDB: ${error.message}`);
    process.exit(1);
  }
};

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

startServer();
