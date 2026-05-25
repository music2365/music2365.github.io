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
  {title: "Shape of You", artist: "Ed Sheeran", src: "music/Ed Sheeran - Shape of You.mp3"},
  {title: "Blinding Lights", artist: "The Weeknd", src: "music/The Weeknd - Blinding Lights (Official Audio).mp3"},
  {title: "Dance Monkey", artist: "Tones And I", src: "music/Dance Monkey - Tones And I.mp3"},
  {title: "rockstar", artist: "Post Malone, 21 Savage", src: "music/Rockstar (feat. 21 Savage) - Post Malone.mp3"},
  {title: "One Dance", artist: "Drake, WizKid, Kala", src: "music/SpotiDown.App - One Dance - Drake.mp3"},
  {title: "Closer", artist: "The Chainsmokers, Halsey", src: "music/Closer - The Chainsmokers; Halsey - EDM.mp3"},
  {title: "Someone You Loved", artist: "Lewis Capaldi", src: "music/Lewis Capaldi - Someone You Loved.mp3"},
  {title: "Sunflower", artist: "Post Malone Swae Lee", src: "music/Post Malone, Swae Lee - Sunflower.mp3"},
  {title: "Señorita", artist: "Shawn Mendes, Camila Cabello", src: "music/Señorita - Shawn Mendes.mp3"},
  {title: "Thinking out Loud", artist: "Ed Sheeran", src: "music/SpotiDown.App - Thinking out Loud - Ed Sheeran.mp3"},
  {title: "bad guy", artist: "Billie Elish", src: "music/SpotiDown.App - bad guy - Billie Eilish.mp3"},
  {title: "God's Plan", artist: "Drake", src: "music/SpotiDown.App - God_s Plan - Drake (1).mp3"},
  {title: "Say You Won't Let Go", artist: "James Arthur", src: "music/SpotiDown.App - Say You Won_t Let Go - James Arthur.mp3"},
  {title: "Perfect", artist: "Ed Sheeran", src: "music/Perfect - SpotiDown.App - Perfect - Ed Sheeran.mp3"},
  {title: "Believer", artist: "Imagine Dragons", src: "music/Believer (03-26) - [8D AUDIO]- Imagine Dragons.mp3"},
  {title: "Havana", artist: "Camila Cabello, Young Thug", src: "music/SpotiDown.App - Havana _feat. Young Thug_ - Camila Cabello.mp3"},
  {title: "Lucid Dreams", artist: "Juice WRLD", src: "music/SpotiDown.App - Lucid Dreams - Juice WRLD.mp3"},
  {title: "Photograph", artist: "Ed Sheeran", src: "music/SpotiDown.App - Photograph - Ed Sheeran.mp3"},
  {title: "Starboy", artist: "The Weekend, Draft Punk", src: "music/Starboy.mp3"},
  {title: "SAD!", artist: "XXXTENTACION", src: "music/SpotiDown.App - SAD_ - XXXTENTACION.mp3"},
  {title: "Love Yourself", artist: "Justin Beiber", src: "music/SpotiDown.App - Love Yourself - Justin Bieber.mp3"},
  {title: "Something Just like This", artist: "The Chainsmokers, Coldplay", src: "music/SpotiDown.App - Something Just Like This - The Chainsmokers.mp3"},
  {title: "New Rules", artist: "Dua Lipa", src: "music/SpotiDown.App - New Rules - Dua Lipa.mp3"},
  {title: "Thunder", artist: "Imagine Dragons", src: "music/SpotiDown.App - Thunder - Imagine Dragons.mp3"},
  {title: "Lean On", artist: "Major Lazer, DJ Snake, MØ", src: "music/SpotiDown.App - Lean On - Major Lazer.mp3"},
  {title: "Bohemian Rhapsody", artist: "Queen", src: "music/SpotiDown.App - Bohemian Rhapsody - Remastered 2011 - Queen.mp3"},
  {title: "XO Tour Lif3", artist: "Lil Uzi Vert", src: "music/SpotiDown.App - XO Tour Llif3 - Lil Uzi Vert.mp3"},
  {title: "Shallow", artist: "Lady Gaga, Bradley Cooper", src: "music/SpotiDown.App - Shallow - Lady Gaga.mp3"},
  {title: "Despacito", artist: "Luis Fonsi, Daddy Yankee, Justin Bieber", src: "music/SpotiDown.App - Despacito - Remix - Luis Fonsi.mp3"},
  {title: "Sorry", artist: "Justin Beiber", src: "music/SpotiDown.App - Sorry - Justin Bieber.mp3"},
  {title: "All of Me", artist: "John Legend", src: "music/SpotiDown.App - All of Me - John Legend.mp3"},
  {title: "Happier", artist: "Marshmallo, Bastille", src: "music/SpotiDown.App - Happier - Marshmello.mp3"},
  {title: "7 rings", artist: "Ariana Grande", src: "music/example.mp3"},
  {title: "HUMBLE.", artist: "Kendrick Lamar", src: "music/example.mp3"},
  {title: "Don't Let Me Down", artist: "The Chainsmokers, Daya", src: "music/example.mp3"},
  {title: "Joclyn Flores", artist: "XXXTENTACION", src: "music/example.mp3"},
  {title: "Better Now", artist: "Post Malone", src: "music/example.mp3"},
  {title: "SICKO MODE", artist: "Travis Scott", src: "music/example.mp3"},
  {title: "Stressed Out", artist: "Twenty One Pilots", src: "music/example.mp3"},
  {title: "Take Me to Church", artist: "Hozier", src: "music/example.mp3"},
  {title: "Don't Start Now", artist: "Dua Lipa", src: "music/example.mp3"},
  {title: "I Took A Pill In Ibiza", artist: "Mike Posner, Seeb", src: "music/example.mp3"},
  {title: "Faded", artist: "Alan Walker", src: "music/example.mp3"},
  {title: "goosebumps", artist: "Travis Scott", src: "music/example.mp3"},
  {title: "Let Me Love You", artist: "DJ Snake, Justin Bieber", src: "music/example.mp3"},
  {title: "Congratulations", artist: "Post Malone, Quavo", src: "music/example.mp3"},
  {title: "lovely", artist: "Billie Elish, Khalid", src: "music/example.mp3"},
  {title: "Circles", artist: "Post Malone", src: "music/example.mp3"},
  {title: "Let Her Go", artist: "Passenger", src: "music/example.mp3"},
  {title: "Stay With Me", artist: "Sam Smith", src: "music/example.mp3"},
  {title: "Treat You Better", artist: "Shawn Mendes", src: "music/example.mp3"},
  {title: "thank u,next", artist: "Ariana Grande", src: "music/example.mp3"},
  {title: "I Don't Care", artist: "Ed Sheeran & Justin Bieber, Justin Bieber", src: "music/example.mp3"},
  {title: "Uptown Funk", artist: "Mark Ronson, Bruno Mars", src: "music/example.mp3"},
  {title: "Unforgettable", artist: "French Montana, Swae Lee", src: "music/example.mp3"},
  {title: "Cheap Thrills", artist: "Sia", src: "music/example.mp3"},
  {title: "Girls Like You", artist: "Maroon 5, Cardi B", src: "music/example.mp3"},
  {title: "Too Good At Goodbyes", artist: "Sam Smith", src: "music/example.mp3"},
  {title: "Wake Me Up", artist: "Avicil", src: "music/example.mp3"},
  {title: "Without Me", artist: "Halsey", src: "music/example.mp3"},
  {title: "Roses", artist: "SAINt JHN, Imanbek", src: "music/example.mp3"},
  {title: "7 Years", artist: "Lukas Graham", src: "music/example.mp3"},
  {title: "CAN'T STOP THE FEELING!", artist: "Justin Timerlake", src: "music/example.mp3"},
  {title: "Counting Stars", artist: "OneRepublic", src: "music/example.mp3"},
  {title: "I Like It", artist: "Cardi B, Bad Bunny, J Balvin", src: "music/example.mp3"},
  {title: "Can't Hold Us", artist: "Macklemore, Ryan Lewis, Macklemore & Ryan Lewis", src: "music/example.mp3"},
  {title: "Stiches", artist: "Shawn Mendes", src: "music/example.mp3"},
  {title: "The Box", artist: "Roddy Ricch", src: "music/example.mp3"},
  {title: "That's What I Like", artist: "Bruno Mars", src: "music/example.mp3"},
  {title: "Moonlight", artist: "XXXTENTACION", src: "music/example.mp3"},
  {title: "I Fall Apart", artist: "Post Malone", src: "music/example.mp3"},
  {title: "The Hills", artist: "The Weeknd", src: "music/example.mp3"},
  {title: "Cold Water", artist: "Major Lazer, Justin Bieber, MØ", src: "music/example.mp3"},
  {title: "What Do You Mean?", artist: "Justin Bieber", src: "music/example.mp3"},
  {title: "Riptide", artist: "Vance Joy", src: "music/example.mp3"},
  {title: "See You Again", artist: "Wiz Khalifa, Charlie Puth", src: "music/example.mp3"},
  {title: "Heathens", artist: "Twenty One Pilots", src: "music/example.mp3"},
  {title: "Psycho", artist: "Post Malone, Ty Dolla $ign", src: "music/example.mp3"},
  {title: "One Kiss", artist: "Calvin Harris, Dua Lipa", src: "music/example.mp3"},
  {title: "I Like Me Better", artist: "Lauv", src: "music/example.mp3"},
  {title: "Radioactive", artist: "Imagine Dragons", src: "music/example.mp3"},
  {title: "Eastside", artist: "benny blanco, Halsey, Khalid", src: "music/example.mp3"},
  {title: "Old Town Road", artist: "Lis Nas X, Billy Ray Cyrus", src: "music/example.mp3"},
  {title: "Attention", artist: "Charlie Puth", src: "music/example.mp3"},
  {title: "Demons", artist: "Imagine Dragons", src: "music/example.mp3"},
  {title: "Cheerleader", artist: "OMI", src: "music/example.mp3"},
  {title: "Youngblood", artist: "5 Seconds of Summer", src: "music/example.mp3"},
  {title: "Sugar", artist: "Maroon 5", src: "music/example.mp3"},
  {title: "Taki Taki", artist: "DJ Snake, Selena Gomez, Ozuna, Cardi B", src: "music/example.mp3"},
  {title: "Can't Feel My Face", artist: "The Weeknd", src: "music/example.mp3"},
  {title: "This Is What You Came For", artist: "Calvin Harris, Rihanna", src: "music/example.mp3"},
  {title: "We Don't Talk Anymore", artist: "Charlie Puth, Selena Gomez", src: "music/example.mp3"},
  {title: "In My Feelings", artist: "Drake", src: "music/example.mp3"},
  {title: "Hello", artist: "Adele", src: "music/example.mp3"},
  {title: "IDGAF", artist: "Dua Lipa", src: "music/example.mp3"},
  {title: "I'm Yours", artist: "Jason Mraz", src: "music/example.mp3"},
  {title: "Chandelier", artist: "Sia", src: "music/example.mp3"},
  {title: "when the party's over", artist: "Billie Elish", src: "music/example.mp3"},
  {title: "Wow.", artist: "Post Malone", src: "music/example.mp3"},
  {title: "I Don't Wanna Live Forever", artist: "ZAYN, Taylor Swift", src: "music/example.mp3"},

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
