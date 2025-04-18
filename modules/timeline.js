// timeline.js
export function updateTempoDisplay(bpm) {
  const tempoDisplay = document.getElementById('tempo-display');
  tempoDisplay.textContent = `${bpm} BPM`;
  // In future, tie BPM to actual playback rate logic
}

// Future structure functions can go here:
// export function drawTimelineGrid(bpm) { ... }
// export function positionPlayhead(time) { ... }
