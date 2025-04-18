// mixer.js
import { getTrackNodes } from './audioEngine.js';

let mixerContainer = document.getElementById('mixer-channels');

export function setupMixer() {
  const mixer = document.getElementById('mixer');
  mixer.textContent = 'Mixer Ready 🎛️';
}

export function addMixerChannel() {
  const trackIndex = getTrackNodes().length - 1;
  const gainNode = getTrackNodes()[trackIndex];

  const channel = document.createElement('div');
  channel.classList.add('mixer-channel');

  const label = document.createElement('span');
  label.textContent = `Track ${trackIndex + 1}`;

  const volume = document.createElement('input');
  volume.type = 'range';
  volume.min = 0;
  volume.max = 2;
  volume.step = 0.01;
  volume.value = 1;
  volume.addEventListener('input', () => {
    gainNode.gain.value = parseFloat(volume.value);
  });

  const pan = document.createElement('input');
  pan.type = 'range';
  pan.min = -1;
  pan.max = 1;
  pan.step = 0.01;
  pan.value = 0;

  const stereoPanner = new StereoPannerNode(gainNode.context, { pan: 0 });
  gainNode.disconnect();
  gainNode.connect(stereoPanner).connect(gainNode.context.destination);

  pan.addEventListener('input', () => {
    stereoPanner.pan.value = parseFloat(pan.value);
  });

  channel.appendChild(label);
  channel.appendChild(volume);
  channel.appendChild(pan);
  mixerContainer.appendChild(channel);
}
