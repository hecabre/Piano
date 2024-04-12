import {
  createUser,
  selectUser,
  selectUserByEmail,
} from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findTutor } from "../models/tutor.model.js";

dotenv.config();

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No autorizado" });
  jwt.verify(token, process.env.TOKEN, async (error, user) => {
    if (error) return res.status(401).json({ error: "No autorizado" });
    const child = await selectUserByEmail(user.email);
    const tutor = await findTutor(user.email);

    if (!child && !tutor) {
      return res.status(401).json({ message: "No autorizado" });
    }
    if (tutor) return res.json(tutor);
    if (child) return res.json(child);
    console.log(responseData);
  });
};

export const register = async (req, res) => {
  try {
    const { username, second_name, age, password, email } = req.body;
    const userFound = await selectUserByEmail(email);
    if (userFound) {
      return res.json({ error: "El usuario ya se encuentra registrado" });
    }

    const passwordHash = await bcryptjs.hash(password, 10);
    const user = await createUser(
      username,
      second_name,
      parseInt(age),
      passwordHash,
      email
    );

    if (user) {
      return res.json({
        message: "Usuario creado exitosamente",
      });
    }
  } catch (e) {
    console.error("Error al registrar usuario:", e);
    return res.json({ error: "Hubo un error al registrar al usuario" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await selectUser(email, password);
    if (!user) return res.json({ error: "Credenciales erroneas" });
    const token = await createAccessToken({ email: email });
    res.cookie("token", token);
    res.json({
      message: "User loged",
      email: email,
    });
  } catch (e) {
    res.json({ error: "Credenciales erroneas" });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.send("deslogeado");
  return res.status(200);
};

export const profile = async (req, res) => {
  const user = await selectUserByEmail(req.user.email);
  console.log(user);
  if (!user) return res.status(400).json({ message: "User not found" });
  return res.send("xd");
};
