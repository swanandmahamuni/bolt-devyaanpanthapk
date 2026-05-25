let audioSrc: string | null = null;
let audioEl: HTMLAudioElement | null = null;

export const setChimeAudioSrc = (src: string) => {
  audioSrc = src;
};

const getAudio = () => {
  if (!audioEl && audioSrc) {
    audioEl = new Audio(audioSrc);
  }
  return audioEl;
};

export const playChime = () => {
  const a = getAudio();
  if (a) {
    a.currentTime = 0;
    a.volume = 0.6;
    a.play().catch(() => {});
  }
};

export const playDevotionalChime = () => {
  const a = getAudio();
  if (a) {
    a.currentTime = 0;
    a.volume = 0.8;
    a.play().catch(() => {});
  }
};

export const vibrate = (pattern: number | number[]) => {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};
