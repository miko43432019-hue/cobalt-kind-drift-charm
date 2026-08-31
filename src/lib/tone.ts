let ctx: AudioContext | null = null;

function context() {
  if (typeof window === "undefined") return null;
  ctx ??= new AudioContext();
  return ctx;
}

export function playTone(ok: boolean) {
  const audio = context();
  if (!audio) return;
  void audio.resume();
  const now = audio.currentTime;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(ok ? 660 : 196, now);
  if (ok) osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
  gain.gain.setValueAtTime(0.07, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start(now);
  osc.stop(now + 0.24);
}
