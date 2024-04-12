import { connectDB } from "../db.js";

export const getSubjects = async () => {
  const connection = await connectDB(); // Agrega "await" aquí
  try {
    const response = await connection.execute("SELECT * FROM subjects");
    return response;
  } catch (error) {
    console.error("Error en getSubjects:", error);
    return null;
  } finally {
    await connection.end();
  }
};
