import { useState, useEffect } from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { useSubject } from "../context/SubjectContext";
import { useParams } from "react-router-dom";
import { Option } from "../components/questions/Option";
import { useQuestion } from "../context/QuestionContext";
import { Dificult } from "../components/Dificult";

export const ExerciseQuestion = () => {
  const { subject_id, id_question } = useParams();
  const { setAnswer, question, option: optionContext, answer } = useQuestion();
  const { getExercise } = useSubject();
  const [data, setData] = useState();
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getExercise(id_question);
        setData(res.data.exercises[0]);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [id_question, question]);

  useEffect(() => {
    if (data) {
      setAnswer(data.answer);
    }
  }, [data, setAnswer]);

  useEffect(() => {
    const optionsArray = [
      {
        id: 1,
        text: data?.answer,
        bemol: true,
        note: "q",
        note_path: "../assets/audio/Do.wav",
      },
      {
        id: 2,
        text: data?.option_1,
        bemol: false,
        note: "w",
        note_path: "../assets/audio/Rebemol.wav",
      },
      {
        id: 3,
        text: data?.option_2,
        bemol: false,
        note: "e",
        note_path: "../assets/audio/Re.wav",
      },
      {
        id: 4,
        text: data?.option_3,
        bemol: true,
        note: "r",
        note_path: "../assets/audio/Mibemol.wav",
      },
    ];

    const shuffled = [...optionsArray].sort(() => Math.random() - 0.5);

    setShuffledOptions(shuffled);
  }, [data]);

  return (
    <>
      <Sidebar />
      <section className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen relative top-20 py-3">
        <div className="px-5 py-2 flex flex-wrap">
          <div className="w-full px-2 py-1 bg-slate-50 h-32 flex items-center justify-evenly gap-2 rounded-lg shadow-lg flex-wrap mb-5">
            <div>
              <img
                src={`../../public/img/${subject_id}.png`}
                className="h-16 w-16 md:h-32 md:w-32 rounded-md"
                alt={`Subject ${subject_id}`}
              />
            </div>
            <div className="flex items-center justify-center gap-20">
              <div className="flex flex-col">
                <p>
                  Pregunta:{" "}
                  <span className=" font-semibold">{data?.exercise_name}</span>
                </p>
              </div>
              <Dificult range={data?.difficulty} />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            {shuffledOptions.map((option) => (
              <Option
                selected={option.text === optionContext}
                key={option.id}
                option={option.text}
                note={option.note}
                note_path={option.note_path}
                bemol={option.bemol}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
