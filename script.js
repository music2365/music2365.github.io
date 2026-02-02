const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("nowPlaying");

function playSong(title, src) {
  audio.src = src;
  audio.play();
  nowPlaying.textContent = title;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
