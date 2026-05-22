const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");

const playPauseBtn = document.getElementById("playPauseBtn");
const songList = document.getElementById("songList");
const searchInput = document.getElementById("search");
const top100Section = document.getElementById("top100Section");
const top100List = document.getElementById("top100List");

/* ===== ALL SONGS ===== */
const songs = [

  // TOP 100 SONGS
  {title: "Blinding Lights", artist: "The Weekend", src: "music/The Weeknd - Blinding Lights (Official Audio).mp3"},
  {title: "Shape of You", artist: "Ed Sheeran", src: "music/Ed Sheeran - Shape of You.mp3"},
  {title: "Sweater Weather", artist: "The Neighbourhood", src: "music/The Neighbourhood - Sweater Weather (Official Video).mp3"},
  {title: "Starboy", artist: "The Weekend, Draft Punk", src: "music/Starboy.mp3"},
  {title: "As It Was", artist: "Harry Styles", src: "music/Harry Styles As It Was Lyrics.mp3"},
  {title: "Someone You Loved", artist: "Lewis Capaldi", src: "music/Lewis Capaldi - Someone You Loved.mp3"},
  {title: "Sunflower", artist: "Post Malone Swae Lee", src: "music/Post Malone, Swae Lee - Sunflower.mp3"},
  {title: "One Dance", artist: "Drake, WizKid, Kala", src: "music/SpotiDown.App - One Dance - Drake.mp3"},
  {title: "Perfect", artist: "Ed Sheeran", src: "music/Perfect - Ed Sheeran.mp3"},
  {title: "Airplane", artist: "Nick Phoenix", src: "music/Nick Phoenix - Airplane.mp3"},
  {title: "Stay", artist: "The Kid LAROI, Justin Beiber", src: "music/The_Kid_LAROI_Justin_Bieber_-_Stay_(mp3.pm).mp3"},
  {title: "Believer", artist: "Imagine Dragons", src: "music/Imagine_Dragons_-_Believer_YA_veryu._na_Russkom_(mp3.pm).mp3"},
  {title: "I Wanna Be Yours", artist: "Artic Monkeys", src: "music/example.mp3"},
  {title: "Heat Waves", artist: "Glass Animals", src: "music/example.mp3"},
  {title: "days like today", artist: "snow shack", src: "music/example.mp3"},
  {title: "lovely", artist: "Billie Elish, Khalid", src: "music/example.mp3"},
  {title: "Yellow", artist: "Coldplay", src: "music/example.mp3"},
  {title: "Do I even Count?", artist: "Macartney Reinhardt", src: "music/example.mp3"},
  {title: "The Night We Met", artist: "Lord Huron", src: "music/example.mp3"},
  {title: "Closer", artist: "The Chainsmokers, Halsey", src: "music/example.mp3"},
  {title: "BIRDS OF A FEATHER", artist: "Billie Elish", src: "music/example.mp3"},
  {title: "Die with a Smile", artist: "Lady Gaga, Bruno Mars", src: "music/example.mp3"},
  {title: "I wanna know your Love", artist: "Navid Sole", src: "music/example.mp3"},
  {title: "Riptide", artist: "Vance Joy", src: "music/example.mp3"},
  {title: "Something Just like This", artist: "The Chainsmokers, Coldplay", src: "music/example.mp3"},
  {title: "Say you wont Let Go", artist: "James Arthur", src: "music/example.mp3"},
  {title: "Another Love", artist: "Tom Odell", src: "music/example.mp3"},
  {title: "Every Breath You Take", artist: "The Police", src: "music/example.mp3"},
  {title: "Counting Stars", artist: "OneRepublic", src: "music/example.mp3"},
  {title: "Let's Go", artist: "Nick Phoenix", src: "music/example.mp3"},
  {title: "Take Me to Church", artist: "Hozier", src: "music/example.mp3"},
  {title: "Dance Monkey", artist: "Tones And I", src: "music/example.mp3"},
  {title: "Boston", artist: "STELLA LEFTY", src: "music/example.mp3"},
  {title: "Photograph", artist: "Ed Sheeran", src: "music/example.mp3"},
  {title: "Lemme Know", artist: "Mal Mula", src: "music/example.mp3"},
  {title: "rockstar", artist: "Post Malone, 21 Savage", src: "music/example.mp3"},
  {title: "Iris", artist: "The Goo Goo Dolls", src: "music/example.mp3"},
  {title: "Cruel Summer", artist: "Taylor Swift", src: "music/example.mp3"},
  {title: "Can't Hold Us", artist: "Macklemore, Ryan Lewis, Macklemore & Ryan Lewis, Ray Dalton", src: "music/example.mp3"},
  {title: "Philosophy", artist: "Jbryan, Kevin Lee", src: "music/example.mp3"},
  {title: "Viva La Vida", artist: "Coldplay", src: "music/example.mp3"},
  {title: "Señorita", artist: "Shawn Mendes, Camila Cabello", src: "music/example.mp3"},
  {title: "Watermelon Sugar", artist: "Harry Styles", src: "music/example.mp3"},
  {title: "Sad As They Come", artist: "Alex Artale", src: "music/example.mp3"},
  {title: "Just the Way You Are", artist: "Bruno Mars", src: "music/example.mp3"},
  {title: "Die For You", artist: "The Weekend", src: "music/example.mp3"},
  {title: "Locked out of Heaven", artist: "Bruno Mars", src: "music/example.mp3"},
  {title: "Don't Start Now", artist: "Dua Lipa", src: "music/example.mp3"},
  {title: "Love Yourself", artist: "Justin Beiber", src: "music/example.mp3"},
  {title: "Chasing Those Traces", artist: "Kalu", src: "music/example.mp3"},
  {title: "That's What I Like", artist: "Bruno Mars", src: "music/example.mp3"},
  {title: "Mr. Brightside", artist: "The Killers", src: "music/example.mp3"},
  {title: "In the End", artist: "Linkin Park", src: "music/example.mp3"},
  {title: "Circles", artist: "Post Malone", src: "music/example.mp3"},
  {title: "rearview", artist: "leoleo", src: "music/example.mp3"},
  {title: "Bohemian Rhapsody", artist: "Queen", src: "music/example.mp3"},
  {title: "When I Was Your Man", artist: "Bruno Mars", src: "music/example.mp3"},
  {title: "goosebumps", artist: "Travis Scott", src: "music/example.mp3"},
  {title: "Lucid Dreams", artist: "Juice WRLD", src: "music/example.mp3"},
  {title: "Rescue Me", artist: "Rico Sharma", src: "music/example.mp3"},
  {title: "Thinking out Loud", artist: "Ed Sheeran", src: "music/example.mp3"},
  {title: "Wake Me Up", artist: "Avicii", src: "music/example.mp3"},
  {title: "Shallow", artist: "Lady Gaga, Bradley Cooper", src: "music/example.mp3"},
  {title: "Without Me", artist: "Eminem", src: "music/example.mp3"},
  {title: "All of Me", artist: "John Legend", src: "music/example.mp3"},
  {title: "Yea", artist: "Mj Grizz", src: "music/example.mp3"},
  {title: "God's Plan", artist: "Drake", src: "music/example.mp3"},
  {title: "Let Me Love You", artist: "DJ Snake, Justin Bieber", src: "music/example.mp3"},
  {title: "The Hills", artist: "The Weekend", src: "music/example.mp3"},
  {title: "Self Aware", artist: "Temper City", src: "music/example.mp3"},
  {title: "Stressed Out", artist: "Twenty One Pilots", src: "music/example.mp3"},
  {title: "Demons", artist: "Imagine Dragons", src: "music/example.mp3"},
  {title: "Thunder", artist: "Imagine Dragons", src: "music/example.mp3"},
  {title: "All The Stars", artist: "Kendrick Lamar, SZA", src: "music/example.mp3"},
  {title: "I Still Think About You", artist: "Addict.", src: "music/example.mp3"},
  {title: "Espresso", artist: "Sabrina Carpenter", src: "music/example.mp3"},
  {title: "Do I Wanna Know", artist: "Artic Monkeys", src: "music/example.mp3"},
  {title: "Beautiful Things", artist: "Benson Boone", src: "music/example.mp3"},
  {title: "Seven", artist: "Jung Kook, Latto", src: "music/example.mp3"},
  {title: "See You Again", artist: "Tyler, The Creator, Kali Uchis", src: "music/example.mp3"},
  {title: "No Role Modelz", artist: "J. Cole", src: "music/example.mp3"},
  {title: "Sorry", artist: "Justin Beiber", src: "music/example.mp3"},
  {title: "bad guy", artist: "Billie Elish", src: "music/example.mp3"},
  {title: "HUMBLE.", artist: "Kendrick Lamar", src: "music/example.mp3"},
  {title: "Unforgettable", artist: "French Montana, Swae Lee", src: "music/example.mp3"},
  {title: "Lose Yourself", artist: "Eminem", src: "music/example.mp3"},
  {title: "Smells Like Teen Spirit", artist: "Nirvana", src: "music/example.mp3"},
  {title: "Creep", artist: "Radiohead", src: "music/example.mp3"},
  {title: "Flowers", artist: "Miley Cyrus", src: "music/example.mp3"},
  {title: "tower of memories", artist: "ivri", src: "music/example.mp3"},
  {title: "Treat You Better", artist: "Shawn Mendes", src: "music/example.mp3"},
  {title: "The Scientist", artist: "Coldplay", src: "music/example.mp3"},
  {title: "drivers license", artist: "Olivia Rodrigo", src: "music/example.mp3"},
  {title: "505", artist: "Artic Monkeys", src: "music/example.mp3"},
  {title: "Don't Stop Believin'", artist: "Journey", src: "music/example.mp3"},
  {title: "7 rings", artist: "Ariana Grande", src: "music/example.mp3"},
  {title: "There's Nothing Holdin' Me Back", artist: "Shawn Mendes", src: "music/example.mp3"},
  {title: "Static of the Plains", artist: "Decimus Ray", src: "music/example.mp3"},
  {title: "Let Her Go", artist: "Passenger", src: "music/example.mp3"},
  {title: "Kill Bill", artist: "SZA", src: "music/example.mp3"},

  // OTHER SONGS
  {
    title: "Example Song",
    artist: "Example Artist",
    src: "music/example.mp3"
  }

];

/* ===== TOP 100 ONLY ===== */
const top100Songs = [

  songs[0],
  songs[1],
  songs[2],
  songs[3],
  songs[4],
  songs[5],
  songs[6],
  songs[7],
  songs[8],
  songs[9],
  songs[10],
  songs[11],
  songs[12],
  songs[13],
  songs[14],
  songs[15],
  songs[16],
  songs[17],
  songs[18],
  songs[19],
  songs[20],
  songs[21],
  songs[22],
  songs[23],
  songs[24],
  songs[25],
  songs[26],
  songs[27],
  songs[28],
  songs[29],
  songs[30],
  songs[31],
  songs[32],
  songs[33],
  songs[34],
  songs[35],
  songs[36],
  songs[37],
  songs[38],
  songs[39],
  songs[40],
  songs[41],
  songs[42],
  songs[43],
  songs[44],
  songs[45],
  songs[46],
  songs[47],
  songs[48],
  songs[49],
  songs[50],
  songs[51],
  songs[52],
  songs[53],
  songs[54],
  songs[55],
  songs[56],
  songs[57],
  songs[58],
  songs[59],
  songs[60],
  songs[61],
  songs[62],
  songs[63],
  songs[64],
  songs[65],
  songs[66],
  songs[67],
  songs[68],
  songs[69],
  songs[70],
  songs[71],
  songs[72],
  songs[73],
  songs[74],
  songs[75],
  songs[76],
  songs[77],
  songs[78],
  songs[79],
  songs[80],
  songs[81],
  songs[82],
  songs[83],
  songs[84],
  songs[85],
  songs[86],
  songs[87],
  songs[88],
  songs[89],
  songs[90],
  songs[91],
  songs[92],
  songs[93],
  songs[94],
  songs[95],
  songs[96],
  songs[97],
  songs[98],
  songs[99],

];

let songIndex = 0;
let isPaused = true;

/* ===== RENDER SONG LIST ===== */
function renderSongs(list) {
  // Remove any previous "no results" message
  const existingMessage = document.getElementById("noResultsMsg");
  if (existingMessage) existingMessage.remove();

  songList.innerHTML = "";

  if (list.length === 0 && searchInput.value.trim() !== "") {
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
    document.body.insertBefore(h1, songList);
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

/* ===== RENDER TOP 100 ===== */
function renderTop100() {

  top100List.innerHTML = "";

  top100Songs.forEach(song => {

    const realIndex = songs.indexOf(song);

    const div = document.createElement("div");

    div.className = "song";

    div.textContent = `${song.title} – ${song.artist}`;

    div.onclick = () => playSong(realIndex);

    top100List.appendChild(div);

  });

}
/* ===== SEARCH ===== */
function filterSongs() {

  const query = searchInput.value.toLowerCase().trim();

  // EMPTY SEARCH
  if (query === "") {

    songList.innerHTML = "";

    top100Section.style.display = "block";

    return;
  }

  // HIDE TOP 100
  top100Section.style.display = "none";

  // SEARCH ALL SONGS
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );

  renderSongs(filtered);
}

searchInput.addEventListener("input", filterSongs);
renderTop100();

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
  playPauseBtn.src = "images/play.png";
}

function setPauseShape() {
  playPauseBtn.src = "images/pause.png";
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
/* ===== SKIP 15 SECONDS ===== */
function forward15() {
  audio.currentTime += 15;
}

function back15() {
  audio.currentTime -= 15;
}
/* ===== LOOP ===== */
/* ===== LOOP ===== */
let looping = false;

const loopBtn = document.getElementById("loopBtn");

function toggleLoop() {

  looping = !looping;

  audio.loop = looping;

  if (looping) {

    loopBtn.src = "images/repeatblue.png";

  } else {

    loopBtn.src = "images/repeatgreen.png";

  }
}
