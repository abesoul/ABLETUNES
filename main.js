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
