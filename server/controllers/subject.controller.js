import { getSubjects } from "../models/subject.model.js";

export const listSubject = async (req, res) => {
  const subjects = await getSubjects();
  return res.json({ subjects: subjects });
};
