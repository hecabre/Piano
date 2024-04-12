import { Link } from "react-router-dom";
export const SubjectBar = ({ subjectId, subjectName }) => {
  return (
    <Link
      className="bg-skyBlue-50 px-2 py-2 rounded-lg flex justify-around shadow-2xl w-1/4 items-center flex-wrap text-xs sm:text-sm md:text-base lg:text-base cursor-pointer"
      to={`/subject/${subjectId}`}
    >
      <img
        src={`../../../public/img/${subjectId}.png`}
        className="w-16 h-16 rounded-lg"
      />
      <p>{subjectName}</p>
    </Link>
  );
};
