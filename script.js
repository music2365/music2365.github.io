const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

const playPauseBtn = document.getElementById("playPauseBtn");
const songList = document.getElementById("songList");
const searchInput = document.getElementById("search");

/* ===== SONG DATA ===== */
const songs = [
  {title: "4 Big Guys", artist: "DigBar", src: "music/4 Big Guys.mp3"},
];

let songIndex = 0;
let isPaused = true;

/* ===== RENDER SONG LIST ===== */
function renderSongs(list) {
  // Remove any previous "no results" message
  const existingMessage = document.getElementById("noResultsMsg");
  if (existingMessage) existingMessage.remove();

  songList.innerHTML = "";

  if (list.length === 0) {
    // No results found → create a separate h1 below search
    const h1 = document.createElement("h1");
    h1.id = "noResultsMsg";
    h1.innerHTML = `
      <span style="color: #1db954;">
        We didn't find what you were looking for but you can request it 
        <a href="/requests" style="color: #ADD8E6; text-decoration: underline;">here</a>.
      </span>
    `;
    // Insert it below the search input
    searchInput.insertAdjacentElement("afterend", h1);
    return;
  }

  list.forEach(song => {
    const realIndex = songs.indexOf(song);
    const div = document.createElement("div");
    div.className = "song";
    div.textContent = `${song.title} – ${song.artist}`;
    div.onclick = () => playSong(realIndex);
    songList.appendChild(div);
  });
}

/* ===== SEARCH ===== */
function filterSongs() {
  const query = searchInput.value.toLowerCase();
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );
  renderSongs(filtered);
}

searchInput.addEventListener("input", filterSongs);
renderSongs(songs);

/* ===== PLAY SONG ===== */
function playSong(index) {
  songIndex = index;
  audio.src = songs[index].src;

  songTitle.textContent = songs[index].title;
  songArtist.textContent = songs[index].artist;

  audio.play();
  isPaused = false;
  setPauseShape();
}

/* ===== PLAY / PAUSE ===== */
function togglePlay() {
  if (audio.paused) {
    audio.play();
    isPaused = false;
    setPauseShape();
  } else {
    audio.pause();
    isPaused = true;
    setPlayShape();
  }
}

function setPlayShape() {
  playPauseBtn.src = "images/play-button.png";
}

function setPauseShape() {
  playPauseBtn.src = "images/pause-button.png";
}

/* ===== NEXT / PREV ===== */
function next() {
  songIndex = (songIndex + 1) % songs.length;
  playSong(songIndex);
}

function prev() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong(songIndex);
}

/* ===== TIME FORMAT ===== */
function format(time) {
  if (!time || isNaN(time)) return "0:00";
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

/* ===== PROGRESS UPDATE ===== */
function updateProgress() {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  current.textContent = format(audio.currentTime);
  duration.textContent = format(audio.duration);
  requestAnimationFrame(updateProgress);
}

requestAnimationFrame(updateProgress);

/* ===== SEEK ===== */
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

/* ===== SONG END ===== */
audio.addEventListener("ended", () => {
  isPaused = true;
  setPlayShape();
});
