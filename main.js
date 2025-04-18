// main.js

// Initialization modules
import { setupTransportControls } from './modules/transport.js';
import { setupTimeline, updateTempoDisplay } from './modules/timeline.js';
import { setupMixer, addMixerChannel } from './modules/mixer.js';
import { setupTrackManager, createTrackElement } from './modules/trackManager.js';

// Audio engine & storage
import { initAudioEngine, playAudio, pauseAudio, stopAudio, addTrackToEngine } from './modules/audioEngine.js';
import { saveProject, loadProject } from './modules/storage.js';

// DOM references
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const addTrackBtn = document.getElementById('add-track');
const tempoSlider = document.getElementById('tempo-slider');
const tempoDisplay = document.getElementById('tempo-display');
const saveBtn = document.getElementById('save-project');
const loadBtn = document.getElementById('load-project');

document.addEventListener('DOMContentLoaded', () => {
  initAudioEngine();

  // Optional modular setups if needed
  setupTransportControls?.();
  setupTimeline?.();
  setupMixer?.();
  setupTrackManager?.();

  // Manual event bindings
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
});
