export function setupTransportControls() {
  const tempoSlider = document.getElementById('tempo-slider');
  const tempoDisplay = document.getElementById('tempo-display');
  const playBtn = document.getElementById('play');
  const stopBtn = document.getElementById('stop');
  const recordBtn = document.getElementById('record');

  tempoSlider.addEventListener('input', () => {
    tempoDisplay.textContent = `${tempoSlider.value} BPM`;
  });

  playBtn.addEventListener('click', () => console.log('Play'));
  stopBtn.addEventListener('click', () => console.log('Stop'));
  recordBtn.addEventListener('click', () => console.log('Record'));
}
