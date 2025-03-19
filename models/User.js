import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  role: {
    type: String,
    enum: ["utilisateur", "abonné", "premium"],
    default: "utilisateur",
  },
  subscription: {
    amount: { type: Number, default: 0 },
    start_date: { type: Date },
    end_date: { type: Date },
  },
  profile: {
    name: { type: String },
    preferences: [{ type: String }],
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
  this.updateAt = Date.now();
  next();
});

export default mongoose.model("User", UserSchema);
