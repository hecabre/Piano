import { createContext, useContext, useState } from "react";
import {
  getExercisesBySubject,
  getSubjects,
  getExerciseId,
} from "../api/subjects";

export const SubjectContext = createContext();

export const useSubject = () => {
  const context = useContext(SubjectContext);
  if (!context) throw new Error("useSubject must be used within context");
  return context;
};

export const SubjectProvider = ({ children }) => {
  const [allSubjects, setAllSubjects] = useState([]);
  const [questions, setQuestions] = useState([]);

  const listSubjects = async () => {
    const response = await getSubjects();
    setAllSubjects(response);
    return response;
  };

  const getBySubject = async (id) => {
    const response = await getExercisesBySubject(id);
    console.log("esta es la respuesta", response);
    return response;
  };

  const getExercise = async (id) => {
    const response = await getExerciseId(id);
    console.log("respuesta", response);
    return response;
  };

  return (
    <SubjectContext.Provider
      value={{ allSubjects, listSubjects, getBySubject, getExercise }}
    >
      {children}
    </SubjectContext.Provider>
  );
};
