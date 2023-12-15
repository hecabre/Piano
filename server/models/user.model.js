import { connectDB } from "../db.js";
import bcryptjs from "bcryptjs";

export async function createUser(username, second_name, age, password, email) {
  const connection = await connectDB();
  try {
    await connection.beginTransaction();
    const [result] = await connection.execute(
      "INSERT INTO users (username, email, password_hash, age, second_name) VALUES (?, ?, ?, ?, ?)",
      [username, email, password, age, second_name]
    );
    console.log("Nuevo usuario insertado en la base de datos");
    console.log(result);
    await connection.commit();
  } catch (e) {
    await connection.rollback();
    console.log("Error al registrar el usuario:", e.message);
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

      if (isPasswordValid) {
        return user;
      }
    }
  } catch (e) {
    console.error("Error al seleccionar el usuario:", e.message);
    throw e;
  } finally {
    await connection.end();
  }

  return null;
}
