import {
  createTutor,
  findTutor,
  loginTutor,
  registerChild,
} from "../models/tutor.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import { connectDB } from "../db.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, second_name, age } = req.body;
    const passwordHash = await bcryptjs.hash(password, 10);
    const tutor = await createTutor(
      email,
      passwordHash,
      username,
      second_name,
      parseInt(age)
    );
    if (tutor) {
      console.log(tutor);
      return res.json({
        message: "tutor created",
        email: email,
      });
    }
  } catch (e) {
    return res.json({ message: "El tutor ya existe" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tutor = await loginTutor(email, password);
    console.log("tutor encontrado", tutor);
    if (!tutor)
      return res.json({
        error: "Tutor no encontrado",
      });
    const token = await createAccessToken({ email: email });
    res.cookie("token", token);
    return res.json({ message: "Tutor logeado", email: email });
  } catch {
    return res.json({
      error: "Credenciales erroneas",
    });
  }
};

export const profile = async (req, res) => {
  const connection = await connectDB();
  try {
    const user = await findTutor(req.user.email);
    if (!user) return res.json({ error: "Tutor no encontrado" });
    return res.send(user);
  } catch (e) {
    res.json({
      error: "Error al obtener el perfil del tutor",
    });
  } finally {
    await connection.end();
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.send("deslogeado");
  return res.status(200);
};

export const addChild = async (req, res) => {
  const { email, emailChild } = req.body;
  try {
    const child = await registerChild(email, emailChild);
    console.log(child[0].affectedRows);
    if (child[0].affectedRows === 0)
      return res.json({ error: "Verifica los datos de tu hijo" });
    return res.json({ message: child[0].affectedRows });
  } catch (e) {
    console.log(e);
    return res.json({ error: "Error al registrar al hijo" });
  }
};
