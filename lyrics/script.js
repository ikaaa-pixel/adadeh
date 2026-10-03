const lyrics = [
    "You know it's true",
    "Yeah, I miss you",
    "You know it's true",
    "So what if I call",
    "And you pick up the phone",
    "And I use this holiday to make my way to your ghost",
    "Oh, what if you're lonely",
    "And you know I am too",
    "And I get the chance to say",
    "Merry Christmas, I miss you",
    "I miss you"
];

let index = 0;

const lyricsBox = document.getElementById("lyrics");
const playButton = document.getElementById("playButton");

function showLyrics() {

    lyricsBox.innerHTML = "";

    const lyric = document.createElement("div");

    lyric.className = "lyric";

    lyric.textContent = lyrics[index];

    lyricsBox.appendChild(lyric);

    index++;

    if (index >= lyrics.length) {
        index = 0;
    }
}

playButton.addEventListener("click", function() {

    showLyrics();

    setInterval(showLyrics, 3500);

});