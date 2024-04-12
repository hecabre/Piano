import { connectDB } from "../db.js";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";

dotenv.config();

export const findTutor = async (email) => {
  const connection = await connectDB();
  try {
    const [user] = await connection.execute(
      "SELECT * FROM fathers WHERE email = ?",
      [email]
    );
    return user[0];
  } catch (e) {
    throw e;
  }
};

export const createTutor = async (
  email,
  password,
  username,
  second_name,
  age
) => {
  const connection = await connectDB();
  try {
    await connection.beginTransaction();
    const [tutor] = await connection.execute(
      "INSERT INTO fathers(email, password_hash, username, second_name, age) VALUES(?, ?, ?, ?, ?)",
      [email, password, username, second_name, parseInt(age)]
    );
    await connection.commit();
    return tutor;
  } catch (e) {
    await connection.rollback();
  } finally {
    await connection.end();
  }
};

export async function loginTutor(email, password) {
  const connection = await connectDB();
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM fathers WHERE email = ?",
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
    throw e;
  } finally {
    await connection.end();
  }

  return null;
}

export const getChildrenStats = async (email) => {
  const connection = await connectDB();
  try {
    const [childrenStats] = await connection.execute(
      "SELECT * FROM solve_exercises WHERE user_email = ?",
      [email]
    );
    return childrenStats;
  } catch {
    return null;
  } finally {
    await connection.end();
  }
};

export const registerChild = async (fatherEmail, childEmail) => {
  const connection = await connectDB();
  try {
    connection.beginTransaction();
    const child = await connection.execute(
      "UPDATE users SET tutor = ? WHERE email = ?",
      [fatherEmail, childEmail]
    );
    connection.commit();
    return child;
  } catch {
    connection.rollback();
    return null;
  } finally {
    await connection.end();
  }
};
