const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const nowPlaying = document.getElementById("nowPlaying");

const songs = [
  {
    title: "Back to Friends – sombr",
    src: "music/back_to_friends.mp3"
  }
];

let songIndex = 0;

function playSong(index) {
  songIndex = index;
  audio.src = songs[index].src;
  nowPlaying.textContent = songs[index].title;
  audio.play();
}

function togglePlay() {
  audio.paused ? audio.play() : audio.pause();
}

function next() {
  songIndex = (songIndex + 1) % songs.length;
  playSong(songIndex);
}

function prev() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong(songIndex);
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  current.textContent = format(audio.currentTime);
  duration.textContent = format(audio.duration);
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function format(time) {
  if (!time) return "0:00";
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}
