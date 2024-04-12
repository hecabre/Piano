import { connectDB } from "../db.js";

export const selectSubjectExecisesBySubject = async (subjectId) => {
  const connection = await connectDB();
  try {
    const [exercises] = await connection.execute(
      "SELECT * FROM exercises WHERE subject_id = ?",
      [subjectId]
    );
    return exercises;
  } catch {
    return null;
  } finally {
    await connection.end();
  }
};

export const selectExerciseById = async (id) => {
  const connection = await connectDB();
  try {
    const [exercises] = await connection.execute(
      "SELECT * FROM exercises WHERE id = ?",
      [id]
    );
    return exercises;
  } catch {
    return null;
  } finally {
    await connection.end();
  }
};

export const selectExercises = async () => {
  const connection = await connectDB();
  try {
    const [exercises] = await connection.execute("SELECT * FROM exercises");
    return exercises;
  } catch {
    return null;
  } finally {
    await connection.end();
  }
};

export const exerciseDetails = async (id) => {
  const connection = await connectDB();
  try {
    const [exercise] = await connection.execute(
      "SELECT * FROM exercises WHERE id = ?",
      [id]
    );
    return exercise[0];
  } catch {
    return null;
  } finally {
    await connection.end();
  }
};

export const solvedExercises = async (email) => {
  const connection = await connectDB();
  try {
    const [exercises] = await connection.execute(
      "SELECT * FROM solve_exercices WHERE user_email = ?",
      [email]
    );
    return exercises;
  } catch {
    return null;
  } finally {
    await connection.end();
  }
};
