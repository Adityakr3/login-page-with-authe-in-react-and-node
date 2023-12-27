import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
import ENV from "../config.js"
// post : http://localhost:3030/api/register
// sample data
/*
  @param:{
    "username": "example123",
    "password": "example123",
    "email": "example@gmail.com",
    "firstName": "aditya",
    "lastName": "kumar",
    "mobile": "345678998765",
    "address": "pata ni kaha hai ",
    "profile": " "
  }
 */

export async function register(req, res) {
  try {
    const { username, password, email, profile } = req.body;

    // Check for existing username and email
    await UserModel.findOne({ username });
    await UserModel.findOne({ email });

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 8);
      const user = new UserModel({
        username,
        password: hashedPassword,
        profile: profile || "",
        email,
      });

      await user.save();
      res.status(201).send({ result: "register successfully" });
    } else {
      res.status(400).send({ error: "password is required" }); // Handle missing password
    }
  } catch (error) {
    console.error(error);
    if (error.message === "pls use unique username") {
      res.status(409).send({ error: "Username already exists" });
    } else if (error.message === "pls use unique email") {
      res.status(409).send({ error: "Email already exists" });
    } else {
      res.status(500).send({ error: "Internal server error" });
    }
  }
}
export async function login(req, res) {
  const { username, password } = req.body;
  try {
    UserModel.findOne({ username })
      .then((user) => {
        bcrypt
          .compare(password, user.password)
          .then((passwordCheck) => {
            if (!passwordCheck) {
              return res.status(401).json({ message: "Invalid Password" });
            }
            const token = jwt.sign(
              {
                userId: user._id,
                username: user.username,
              },
              ENV.JWT_SECRET,
              { expiresIn: "24h" }
            );
            return res.status(200).send({
                msg:"login successful.....",
                username:user.username,
                token
            })
          })
          .catch((error) => {
            return res.status(400).send({ error: "password does not match" });
          });
      })
      .catch((error) => {
        return res.status(404).send({ error: "user does not found" });
      });
  } catch (error) {
    return res.status(500).send({ error: "Server Error" });
  }
}

// get : http://localhost:3030/api/user/example123
export async function getUser(req, res) {
  res.json("getUser router");
}

// PUT :  http://localhost:3030/api/updateuser
/** @param{
  "id":"<userid>"
body:{
    firstName:'';
    address:'';
    profile:'';
}
} */

export async function updateuser(req, res) {
  res.json("updateuser router");
}

/** get : http://localhost:3030/api/generateOTP */
export async function generateOTP(req, res) {
  res.json("generateOTP router");
}

/** get : http://localhost:3030/api/verifyOTP */
export async function verifyOTP(req, res) {
  res.json("verifyOTP router");
}

// successfully redirect user when otp is verify
/** get : http://localhost:3030/api/createResetSession */
export async function createResetSession(req, res) {
  res.json("createResetSession router");
}

// update password when user have vaild session
/** PUT : http://localhost:3030/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("resetPassword router");
}
