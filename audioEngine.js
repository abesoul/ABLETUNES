// audioEngine.js
let audioCtx;
let masterGain;
let trackNodes = [];

export function initAudioEngine() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = 1;
  masterGain.connect(audioCtx.destination);
  console.log('🎛️ Audio Engine Initialized');
}

export function playAudio() {
  audioCtx.resume().then(() => console.log('▶️ Playback started'));
}

export function pauseAudio() {
  audioCtx.suspend().then(() => console.log('⏸️ Playback paused'));
}

export function stopAudio() {
  audioCtx.close().then(() => {
    console.log('⏹️ Audio context closed');
    initAudioEngine();
  });
}

export function addTrackToEngine() {
  const trackGain = audioCtx.createGain();
  trackGain.gain.value = 1;
  trackGain.connect(masterGain);
  trackNodes.push(trackGain);
  console.log(`➕ Added track. Total: ${trackNodes.length}`);
}

export function getAudioContext() {
  return audioCtx;
}

export function getTrackNodes() {
  return trackNodes;
}
