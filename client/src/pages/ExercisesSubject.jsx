import { useSubject } from "../context/SubjectContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Question } from "../components/questions/Question";
import { Loader } from "../components/Loader";
export const ExercisesSubject = () => {
  const { id } = useParams();

  const { getBySubject } = useSubject();
  const [data, setData] = useState({ exercises: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        const res = await getBySubject(id);
        console.log("respuesta", res);
        setData(res.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false); // Desactivar el estado de carga cuando se completa la carga de datos
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Sidebar />
      <div className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen relative top-20 py-3">
        <div className="px-5">
          <div className="relative min-h-screen w-full">
            {loading ? (
              // Mostrar el Loader mientras se cargan los datos
              <Loader />
            ) : (
              <div className="flex items-center justify-center gap-8 w-full flex-wrap">
                {/* Mapear el arreglo */}
                {data?.exercises?.map((exercise) => (
                  <Question
                    key={exercise.id}
                    exercise_id={exercise.id}
                    title={exercise.exercise_name}
                    subject_id={exercise.subject_id}
                    description={exercise.exercise_description}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
