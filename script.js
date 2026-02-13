const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const nowPlaying = document.getElementById("nowPlaying");
const playPauseBtn = document.getElementById("playPauseBtn");

const songs = [
  {title: "Back to Friends – Sombr", src: "music/back to friends - sombr - SoundLoadMate.com.mp3"},
  {title: "4 Big Guys - Digbar", src: "music/4 Big Guys.mp3"},
];

const songList = document.getElementById("songList");
const searchInput = document.getElementById("search");

// Render songs
function renderSongs(list) {
  songList.innerHTML = "";

  list.forEach((song, index) => {
    const div = document.createElement("div");
    div.className = "song";
    div.textContent = song.title;
    div.onclick = () => playSong(index);
    songList.appendChild(div);
  });
}

// Filter songs
function filterSongs() {
  const query = searchInput.value.toLowerCase();
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(query)
  );
  renderSongs(filtered);
}

// First load
renderSongs(songs);


let songIndex = 0;
let isPaused = true; // start paused

// Play a song
function playSong(index) {
  songIndex = index;
  audio.src = songs[index].src;
  nowPlaying.textContent = songs[index].title;
  audio.play();
  isPaused = false;
  setPauseShape();
}

// Toggle play/pause
function togglePlay() {
  if(audio.paused){
    audio.play();
    isPaused = false;
    setPauseShape();
  } else {
    audio.pause();
    isPaused = true;
    setPlayShape();
  }
}

// Update play/pause image
function setPlayShape() {
  playPauseBtn.src = "images/play.png";
}

function setPauseShape() {
  playPauseBtn.src = "images/pause.png";
}

// Next/Prev
function next() {
  songIndex = (songIndex + 1) % songs.length;
  playSong(songIndex);
}

function prev() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong(songIndex);
}

// Format time like 0:00
function format(time) {
  if (!time) return "0:00";
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

// Smooth progress bar using requestAnimationFrame
function updateProgress() {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  current.textContent = format(audio.currentTime);
  duration.textContent = format(audio.duration);
  requestAnimationFrame(updateProgress);
}

// Start the smooth updater
requestAnimationFrame(updateProgress);

// Update audio when user drags progress bar
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Make sure button updates when song ends
audio.addEventListener("ended", () => {
  isPaused = true;
  setPlayShape();
});
