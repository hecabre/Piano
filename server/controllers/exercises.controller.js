import {
  selectSubjectExecisesBySubject,
  selectExercises,
  solvedExercises,
  selectExerciseById,
} from "../models/exercises.model.js";

export const listExercise = async (req, res) => {
  const exercises = await selectExercises();
  return res.json({ exercises: exercises });
};

export const exerciseBySubject = async (req, res) => {
  const { id } = req.query;
  console.log("Este es el req.query", id);

  try {
    const exercises = await selectSubjectExecisesBySubject(id);

    return res.json({ exercises: exercises });
  } catch (error) {
    console.error("Error al obtener ejercicios por materia:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener ejercicios por materia" });
  }
};

export const exerciseById = async (req, res) => {
  const { id } = req.query;
  console.log("Este es el req.query", id);

  try {
    const exercises = await selectExerciseById(id);
    return res.json({ exercises: exercises });
  } catch (error) {
    console.error("Error al obtener ejercicios por materia:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener ejercicios por materia" });
  }
};
