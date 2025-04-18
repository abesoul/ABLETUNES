// trackManager.js
import { loadAndRenderAudio } from './waveformRenderer.js';

export function createTrackElement() {
  const track = document.createElement('div');
  track.classList.add('track');

  const label = document.createElement('span');
  label.textContent = `Audio Track`;

  const waveform = document.createElement('canvas');
  waveform.classList.add('waveform');
  waveform.width = 300;
  waveform.height = 100;

  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'audio/*';
  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) await loadAndRenderAudio(file, waveform);
  });

  const controls = document.createElement('div');
  controls.classList.add('track-controls');

  const muteBtn = document.createElement('button');
  muteBtn.textContent = 'Mute';

  const soloBtn = document.createElement('button');
  soloBtn.textContent = 'Solo';

  controls.appendChild(muteBtn);
  controls.appendChild(soloBtn);

  track.appendChild(label);
  track.appendChild(fileInput);
  track.appendChild(waveform);
  track.appendChild(controls);

  return track;
}
