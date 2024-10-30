// Select the buttons and set audio files
const btnMysticForest = document.getElementById("btn-mystic-forest");
const btnCricketsNight = document.getElementById("btn-crickets-night");

// Define audio sources
const mysticForestAudio = new Audio("mystic-forest-ambient.mp3");
const cricketsNightAudio = new Audio("crickets-at-night.mp3");

// Function to reset all images to "play-circle-fill.svg"
function resetAllToPlay() {
  const images = document.querySelectorAll(".c-row button img");
  images.forEach((img) => {
    img.src = "play-circle-fill.svg";
  });
}

// Add event listeners to each button to toggle its image
const buttons = document.querySelectorAll(".c-row button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");

    // If the clicked button's image is "pause", toggle it to "play"
    if (img.src.includes("pause-circle-fill.svg")) {
      img.src = "play-circle-fill.svg";
    } else {
      // Otherwise, reset all to "play" and set the clicked one to "pause"
      resetAllToPlay();
      img.src = "pause-circle-fill.svg";
    }
  });
});
