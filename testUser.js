import mongoose from "mongoose";
import "dotenv/config";
import connectDB from "./config/db.js";
import User from "./models/User.js";

await connectDB();

const testUser = async () => {
  try {
    const user = User.create({
      email: "test@keepconnect.com",
      password: "hashedpassword123",
      role: "abonné",
      subscription: {
        amount: 12,
        start_date: new Date(),
        end_date: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ),
      },
      profile: { name: "John Doe", preferences: ["Front-end", "UX/UI"] },
    });

    console.log("utilisateur crée :", user);
  } catch (error) {
    console.error("Erreur lors de la creationde l'utilisateur:", error.message);
  } finally {
    mongoose.connection.close();
  }
};
testUser();
