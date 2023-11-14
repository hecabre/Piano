import { usePressedKey } from "../hooks/usePressedKey";
import { playAudio } from "../utils/playAudio";

export const Key = ({ bemol, action, redirect_path, note, note_path }) => {
  const { isPressed } = usePressedKey(note, note_path);

  const bemolKey =
    "h-36 w-10 bg-black-800 rounded-lg flex items-start cursor-pointer";
  const whiteKey =
    "h-56 w-10 bg-black-200 rounded-lg flex items-start border border-black-300 cursor-pointer";

  // Establece los estilos basados en si la tecla está presionada o no
  const keyStyle = bemol
    ? isPressed
      ? `${bemolKey} shadow-lg shadow-black-300 `
      : bemolKey
    : isPressed
    ? `${whiteKey} shadow-lg shadow-black-300 `
    : whiteKey;

  // JSX
  return (
    <span className={keyStyle} onClick={() => playAudio(note_path)}></span>
  );
};
