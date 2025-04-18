// waveformRenderer.js
import { getAudioContext, getTrackNodes } from './audioEngine.js';

export async function loadAndRenderAudio(file, canvas) {
  const ctx = getAudioContext();
  const arrayBuffer = await file.arrayBuffer();
  const audioBuffer = await ctx.decodeAudioData(arrayBuffer);

  drawWaveform(canvas, audioBuffer);
  connectBufferToTrack(audioBuffer);
}

function drawWaveform(canvas, audioBuffer) {
  const canvasCtx = canvas.getContext('2d');
  const { width, height } = canvas;
  const data = audioBuffer.getChannelData(0);
  const step = Math.ceil(data.length / width);
  const amp = height / 2;

  canvasCtx.clearRect(0, 0, width, height);
  canvasCtx.fillStyle = '#222';
  canvasCtx.fillRect(0, 0, width, height);
  canvasCtx.strokeStyle = '#4caf50';
  canvasCtx.beginPath();

  for (let i = 0; i < width; i++) {
    const min = Math.min(...data.slice(i * step, (i + 1) * step));
    const max = Math.max(...data.slice(i * step, (i + 1) * step));
    canvasCtx.moveTo(i, (1 + min) * amp);
    canvasCtx.lineTo(i, (1 + max) * amp);
  }

  canvasCtx.stroke();
}

function connectBufferToTrack(audioBuffer) {
  const ctx = getAudioContext();
  const source = ctx.createBufferSource();
  const gainNode = getTrackNodes().at(-1);
  source.buffer = audioBuffer;
  source.connect(gainNode);
  source.start(0);
  console.log('🎵 Audio connected to track & playing');
}
