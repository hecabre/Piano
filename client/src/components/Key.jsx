import { useNavigate } from "react-router-dom";
import { usePressedKey } from "../hooks/usePressedKey";
import { playAudio } from "../utils/playAudio";
import { useQuestion } from "../context/QuestionContext";
import { useEffect } from "react";

export const Key = ({
  bemol,
  action,
  redirect_path,
  note,
  note_path,
  question,
  question_route,
}) => {
  const { isKeyPressed } = usePressedKey(note, note_path);
  const { setOption } = useQuestion();

  console.log(isKeyPressed);

  const navigate = useNavigate();
  const bemolKey = `
    h-24 sm:h-32 md:h-32 lg:h-36 xl:h-40
    w-8 sm:w-10 md:w-10 lg:w-12 xl:w-14
    rounded-lg flex items-start cursor-pointer
    ${isKeyPressed ? "bg-red-500 shadow-lg shadow-black-300" : "bg-gray-700"}
  `;

  const whiteKey = `
    h-40 sm:h-48 md:h-48 lg:h-52 xl:h-56
    w-8 sm:w-10 md:w-10 lg:w-12 xl:w-14
    rounded-lg flex items-start border border-black-300 cursor-pointer
    ${isKeyPressed ? "bg-red-500 shadow-lg" : "bg-white"}
  `;

  const keyStyle = bemol ? bemolKey : whiteKey;

  if (isKeyPressed && redirect_path) {
    setTimeout(() => {
      navigate(redirect_path);
    }, 500);
  }
  useEffect(() => {
    if (isKeyPressed) {
      setOption(question);
      setTimeout(() => {
        navigate(question_route);
      }, 1000);
    }
  }, [isKeyPressed, question, setOption]);
  return (
    <span className={keyStyle} onClick={() => playAudio(note_path)}></span>
  );
};
