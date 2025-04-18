// trackManager.js

export function createTrackElement(trackNumber = 1) {
  const track = document.createElement('div');
  track.classList.add('track');

  const label = document.createElement('span');
  label.textContent = `Audio Track ${trackNumber}`;

  const waveform = document.createElement('div');
  waveform.classList.add('waveform');
  waveform.textContent = '🔊 waveform preview...'; // Placeholder for future audio visual

  const controls = document.createElement('div');
  controls.classList.add('track-controls');

  const muteBtn = document.createElement('button');
  muteBtn.textContent = 'Mute';

  const soloBtn = document.createElement('button');
  soloBtn.textContent = 'Solo';

  controls.appendChild(muteBtn);
  controls.appendChild(soloBtn);

  track.appendChild(label);
  track.appendChild(waveform);
  track.appendChild(controls);

  return track;
}

export function setupTrackManager() {
  const addTrackBtn = document.getElementById('add-track-btn');
  const trackArea = document.getElementById('tracks');
  let trackCount = 0;

  addTrackBtn.addEventListener('click', () => {
    const newTrack = createTrackElement(++trackCount);
    trackArea.appendChild(newTrack);
  });
}
