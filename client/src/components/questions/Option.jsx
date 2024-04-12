import { Key } from "../Key";
import { useQuestion } from "../../context/QuestionContext";
import { playAudio } from "../../utils/playAudio";

export const Option = ({ option, note, bemol, note_path, selected }) => {
  const { setOption, option: optionSelected, answer } = useQuestion();

  const handleOptionClick = () => {
    setOption(option);
    playAudio(note_path);
  };

  return (
    <div
      className={`px-2 py-3 rounded-lg shadow-lg w-1/3 flex items-center justify-center flex-col flex-wrap  ${
        selected ? "bg-skyBlue-300" : "bg-skyBlue-100"
      }`}
      onClick={handleOptionClick}
    >
      <p>Respuesta: {option}</p>
      <p className="text-skyBlue-500 font-bold">
        Presiona la tecla {`${note} `}
        para seleccionar
      </p>
      <div>
        <Key
          bemol={bemol}
          note={note}
          note_path={`${note_path}`}
          question={option}
          action={handleOptionClick}
          question_route={optionSelected === answer ? "/game" : "/gameover"}
        />
      </div>
    </div>
  );
};
