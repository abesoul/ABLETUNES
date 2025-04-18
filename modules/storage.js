// storage.js
export function saveProject() {
  const tracks = document.querySelectorAll('.track');
  const mixer = document.querySelectorAll('.mixer-channel');
  const projectData = {
    tempo: document.getElementById('tempo-slider').value,
    tracks: Array.from(tracks).map((_, i) => {
      const vol = mixer[i].querySelector('input[type="range"]')?.value;
      return { volume: vol };
    })
  };
  localStorage.setItem('daw_project', JSON.stringify(projectData));
  alert('🎉 Project saved!');
}

export function loadProject() {
  const saved = localStorage.getItem('daw_project');
  if (!saved) return alert('❌ No saved project found');

  const data = JSON.parse(saved);
  document.getElementById('tempo-slider').value = data.tempo;
  document.getElementById('tempo-display').textContent = `${data.tempo} BPM`;

  alert('📂 Project loaded. Please manually re-add tracks to sync visuals/audio.');
  // Future improvement: rebuild entire session
}
