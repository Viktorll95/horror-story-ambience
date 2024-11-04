// Select the buttons and set audio files
const btnMysticForest = document.getElementById("btn-mystic-forest");
const btnCricketsNight = document.getElementById("btn-crickets-night");

// Define audio sources
const mysticForestAudio = new Audio("mystic-forest-ambient.mp3");
const cricketsNightAudio = new Audio("crickets-at-night.mp3");

let music;

document
  .querySelector("#btn-mystic-forest")
  .addEventListener("click", function () {
    music = mysticForestAudio;
    music.play();
  });
document
  .querySelector("#btn-crickets-night")
  .addEventListener("click", function () {
    music = cricketsNightAudio;
    music.play();
  });

document.querySelector(".c-title").addEventListener("click", function () {
  music.pause();
});

// Function to reset all images to "play-circle-fill.svg"
function resetAllToPlay() {
  const images = document.querySelectorAll(".c-row button img");
  images.forEach((img) => {
    img.src = "play-circle-fill.svg";
  });
}

// Add event listeners to each button to toggle its image
const buttons = document.querySelectorAll(".m-row button");

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
