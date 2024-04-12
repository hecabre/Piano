import { Sidebar } from "../components/sidebar/Sidebar";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import { useQuestion } from "../context/QuestionContext";

export const GameOver = () => {
  const { answer } = useQuestion();
  return (
    <>
      <Sidebar />
      <section className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen relative top-20 py-3">
        <div className="px-5 py-2 flex flex-wrap text-center justify-center ">
          <div className="bg-sky-100 w-1/2 flex items-center justify-center rounded-md shadow-xl flex-col py-3">
            <MdError className="text-red-500 text-6xl" />
            <p className="font-bold">
              Repuesta incorrecta, la respuesta era {answer}
            </p>
            <Link
              className="w-1/2 py-2 rounded-full bg-gradient-to-r from-skyBlue-400 to-skyBlue-600 text-white"
              to={"/game"}
            >
              Volver a intentar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameOver;
