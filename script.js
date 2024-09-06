const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach((button) => {
  let isPlaying = false;
  let audioElement = document.getElementById(button.dataset.audio);

  button.addEventListener("click", () => {
    if (!isPlaying) {
      audioElement.play();
      button.textContent = "Pause";
    } else {
      audioElement.pause();
      button.textContent = "Play";
    }
    isPlaying = !isPlaying;
  });
});
