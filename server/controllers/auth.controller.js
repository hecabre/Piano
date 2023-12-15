import { createUser, selectUser } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { username, second_name, age, password, email } = req.body;
    const passwordHash = await bcryptjs.hash(password, 10);
    createUser(username, second_name, parseInt(age), passwordHash, email);
    const token = createAccessToken({ email: email });
    res.cookie("token", token);
    res.json({
      message: "User created",
      token: token,
      email: email,
    });
  } catch (e) {
    console.error(e);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await selectUser(email, password);
    if (!user) return res.status(400).json({ message: "User not found" });
    const token = createAccessToken({ email: email });
    res.cookie("token", token);
    res.json({
      message: "User loged",
      token: token,
      email: email,
    });
  } catch (e) {
    console.error(e);
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.send("deslogeado")
  return res.status(200);
};
