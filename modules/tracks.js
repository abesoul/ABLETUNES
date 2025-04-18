export function setupTrackManager() {
  const addTrackBtn = document.getElementById('add-track-btn');
  const trackArea = document.getElementById('tracks');
  let trackCount = 0;

  addTrackBtn.addEventListener('click', () => {
    const newTrack = document.createElement('div');
    newTrack.className = 'track';
    newTrack.textContent = `Track ${++trackCount}`;
    trackArea.appendChild(newTrack);
  });
}
