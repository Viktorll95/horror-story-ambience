document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  container.addEventListener("click", function (e) {
    if (e.target.closest("button")) {
      const button = e.target.closest("button"); // Identify the clicked button
      const cBox = button.closest(".c-box"); // Get the specific .c-box
      const audio = cBox.querySelector("audio"); // Select the audio within that .c-box
      const img = button.querySelector("img"); // Find the play/pause icon image

      if (audio.paused) {
        // Play the song
        audio.play();
        img.src = "pause-circle-fill.svg";
        img.alt = "Pause";
        button.innerText = " Pause ";
        button.appendChild(img);
      } else {
        // Pause the song
        audio.pause();
        img.src = "play-circle-fill.svg";
        img.alt = "Play";
        button.innerText = " Play ";
        button.appendChild(img);
      }
    }
  });
});
