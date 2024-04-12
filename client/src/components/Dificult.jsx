export const Dificult = ({ range }) => {
  let colorClass;
  switch (range) {
    case 1:
      colorClass = "border-green-500";
      break;
    case 2:
      colorClass = "border-yellow-500";
      break;
    case 3:
      colorClass = "border-red-500";
      break;
    default:
      colorClass = "border-gray-500";
  }

  const circleSizeClass = "w-12 h-12";

  return (
    <div>
      <div
        className={`rounded-full ${circleSizeClass} ${colorClass} border-2 flex items-center justify-center`}
      >
        {range}
      </div>
    </div>
  );
};
