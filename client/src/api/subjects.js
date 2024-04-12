import axios from "./axios";

export const getSubjects = async () => {
  const res = await axios.get("subject/list");
  console.log(res);
  return res;
};

export const getExercisesBySubject = async (id) => {
  try {
    const res = await axios.get(`exercise/list/subject?id=${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.error("Error al obtener ejercicios por materia:", error);
    throw error;
  }
};

export const getExerciseId = async (id) => {
  try {
    console.log("id", id);
    const res = await axios.get(`exercise/game`, { params: { id: id } });
    return res;
  } catch (error) {
    console.error("Error al obtener ejercicios por materia:", error);
    throw error;
  }
};
