import { useState, useEffect } from "react";
import { playAudio } from "../utils/playAudio";

export const usePressedKey = (key, audio) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === key) {
        setIsKeyPressed(true);
        playAudio(audio);
      }
    }
    function handleKeyRelease(event) {
      if (event.key === key) {
        setIsKeyPressed(false);
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyRelease);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyRelease);
    };
  }, [key]);

  return { isKeyPressed };
};
