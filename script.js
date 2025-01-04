// Select all necessary elements
const video = document.querySelector('.flex'); // The video element
const playButton = document.createElement('button'); // Play/Pause button
const progressBar = document.createElement('div'); // Progress bar container
const progressFilled = document.createElement('div'); // Progress-filled bar
const volumeSlider = document.createElement('input'); // Volume control slider
const speedSlider = document.createElement('input'); // Playback speed slider
const rewindButton = document.createElement('button'); // Rewind button
const forwardButton = document.createElement('button'); // Forward button

// Add elements to the DOM
document.body.appendChild(playButton);
progressBar.className = 'progress';
progressFilled.className = 'progress__filled';
progressFilled.style.width = '0%'; // Initialize the progress bar
progressBar.appendChild(progressFilled);
document.body.appendChild(progressBar);
volumeSlider.type = 'range';
volumeSlider.min = '0';
volumeSlider.max = '1';
volumeSlider.step = '0.1';
volumeSlider.value = '1';
document.body.appendChild(volumeSlider);
speedSlider.type = 'range';
speedSlider.min = '0.5';
speedSlider.max = '2';
speedSlider.step = '0.1';
speedSlider.value = '1';
document.body.appendChild(speedSlider);
rewindButton.textContent = '« 10s';
document.body.appendChild(rewindButton);
forwardButton.textContent = '25s »';
document.body.appendChild(forwardButton);

// Update play/pause button
function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚'; // Pause symbol
  } else {
    video.pause();
    playButton.textContent = '►'; // Play symbol
  }
}

// Update progress bar as the video plays
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Seek video when clicking on the progress bar
function seekVideo(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Update volume
function updateVolume() {
  video.volume = volumeSlider.value;
}

// Update playback speed
function updateSpeed() {
  video.playbackRate = speedSlider.value;
}

// Rewind video by 10 seconds
function rewindVideo() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

// Forward video by 25 seconds
function forwardVideo() {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

// Event listeners
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', seekVideo);
volumeSlider.addEventListener('input', updateVolume);
speedSlider.addEventListener('input', updateSpeed);
rewindButton.addEventListener('click', rewindVideo);
forwardButton.addEventListener('click', forwardVideo);
