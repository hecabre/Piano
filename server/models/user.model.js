import { connectDB } from "../db.js";
import bcryptjs from "bcryptjs";

export async function createUser(username, second_name, age, password, email) {
  const connection = await connectDB();
  try {
    await connection.beginTransaction();
    const [result] = await connection.execute(
      "INSERT INTO users (username, second_name, age, password_hash, email) VALUES (?, ?, ?, ?, ?)",
      [username, second_name, age, password, email]
    );
    console.log(result);
    await connection.commit();
    return true;
  } catch (e) {
    await connection.rollback();
    console.log("Error al registrar el usuario:", e.message);
    return null;
  } finally {
    await connection.end();
  }
}

export async function selectUser(email, password) {
  const connection = await connectDB();
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      const user = rows[0];
      const isPasswordValid = await bcryptjs.compare(
        password,
        user.password_hash
      );
      if (isPasswordValid) return user;
    }
  } catch (e) {
    console.error("Error al seleccionar el usuario:", e.message);
    throw e;
  } finally {
    await connection.end();
  }

  return null;
}

export async function selectUserByEmail(email) {
  const connection = await connectDB();
  try {
    const user = await connection.execute(
      "SELECT email FROM users WHERE email = ?",
      [email]
    );
    return user;
  } catch (error) {
    console.error("Error selecting user by email:", error);
    return null;
  } finally {
    await connection.close();
  }
}
