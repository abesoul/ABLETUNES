import { setupTransportControls } from './modules/transport.js';
import { setupTimeline } from './modules/timeline.js';
import { setupMixer } from './modules/mixer.js';
import { setupTrackManager } from './modules/tracks.js';

document.addEventListener('DOMContentLoaded', () => {
  setupTransportControls();
  setupTimeline();
  setupMixer();
  setupTrackManager();
});
// main.js
import { initAudioEngine, playAudio, pauseAudio, stopAudio, addTrackToEngine } from './modules/audioEngine.js';
import { addMixerChannel } from './modules/mixer.js';
import { saveProject, loadProject } from './modules/storage.js';
import { createTrackElement } from './modules/trackManager.js';
import { updateTempoDisplay } from './modules/timeline.js';

const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const addTrackBtn = document.getElementById('add-track');
const tempoSlider = document.getElementById('tempo-slider');
const tempoDisplay = document.getElementById('tempo-display');
const saveBtn = document.getElementById('save-project');
const loadBtn = document.getElementById('load-project');

initAudioEngine();

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
stopBtn.addEventListener('click', stopAudio);

tempoSlider.addEventListener('input', () => {
  updateTempoDisplay(tempoSlider.value);
});

addTrackBtn.addEventListener('click', () => {
  const trackElement = createTrackElement();
  document.getElementById('tracks').appendChild(trackElement);
  addTrackToEngine();
  addMixerChannel();
});

saveBtn.addEventListener('click', saveProject);
loadBtn.addEventListener('click', loadProject);
