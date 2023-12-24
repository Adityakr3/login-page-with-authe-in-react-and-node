import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "please provide unidue userName"],
    unique: [true, "username hai "],
  },
  password: {
    type: String,
    require: [true, "please provide a unique password"],
    unique: [false],
  },
  email: {
    type: String,
    require: [true, "please provide a email"],
    unique: true,
  },
  firstName:{ type: String},
  lastName:{ type: String},
  mobile:{ type: Number},
  address:{ type: String},
  profile:{ type: String},
});

export default mongoose.model.Users || mongoose.model('User',UserSchema)