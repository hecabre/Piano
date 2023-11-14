export function playAudio(path) {
  const audio = new Audio(new URL(path, import.meta.url));
  audio.volume = 0.2;
  audio.play();
}
