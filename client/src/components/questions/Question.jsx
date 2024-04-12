import { Link } from "react-router-dom";

export const Question = ({ title, subject_id, description, exercise_id }) => {
  return (
    <Link
      className="flex justify-around cursor-pointer bg-skyBlue-100 shadow-lg px-2 py-1 w-1/4 flex-wrap h-1/4 rounded-lg"
      to={`/exercise/${subject_id}/${exercise_id}`}
    >
      <div>
        <img
          src={`../../../public/img/${subject_id}.png`}
          className="w-32 h-32"
        />
      </div>
      <div className="flex items-center flex-col justify-center flex-wrap">
        <p className="text-gray-600 font-bold text-center">{title}</p>
        <p className="text-sm text-center">{description}</p>
      </div>
    </Link>
  );
};
