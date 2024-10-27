// Select the buttons and set audio files
const btnMysticForest = document.getElementById("btn-mystic-forest");
const btnCricketsNight = document.getElementById("btn-crickets-night");

// Define audio sources
const mysticForestAudio = new Audio("mystic-forest-ambient.mp3");
const cricketsNightAudio = new Audio("crickets-at-night.mp3");

// Set initial states
let isPlayingMysticForest = false;
let isPlayingCricketsNight = false;

// Toggle play/pause for Mystic Forest
btnMysticForest.addEventListener("click", () => {
  const img = btnMysticForest.querySelector("img");

  if (isPlayingMysticForest) {
    mysticForestAudio.pause();
    img.src = "play-circle-fill.svg";
  } else {
    mysticForestAudio.play();
    img.src = "pause-circle-fill.svg";
  }

  // Toggle play state
  isPlayingMysticForest = !isPlayingMysticForest;

  // Pause other audio if playing
  if (isPlayingCricketsNight) {
    cricketsNightAudio.pause();
    btnCricketsNight.querySelector("img").src = "play-circle-fill.svg";
    isPlayingCricketsNight = false;
  }
});

// Toggle play/pause for Crickets at Night
btnCricketsNight.addEventListener("click", () => {
  const img = btnCricketsNight.querySelector("img");

  if (isPlayingCricketsNight) {
    cricketsNightAudio.pause();
    img.src = "play-circle-fill.svg";
  } else {
    cricketsNightAudio.play();
    img.src = "pause-circle-fill.svg";
  }

  // Toggle play state
  isPlayingCricketsNight = !isPlayingCricketsNight;

  // Pause other audio if playing
  if (isPlayingMysticForest) {
    mysticForestAudio.pause();
    btnMysticForest.querySelector("img").src = "play-circle-fill.svg";
    isPlayingMysticForest = false;
  }
});
