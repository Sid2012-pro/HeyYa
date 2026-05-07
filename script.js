const quoteElement = document.getElementById('quote');
const audio = document.getElementById('audioPlayer');
let currentSongNum = 1;
const totalSongs = 6;
audio.src = "1.mp3";
audio.loop = true;
const quotes = [
    "Everything is going to be alright! The <span class='highlight'>luck</span> is on your side!",
    "Don't look back, just keep moving forward!",
    "The shortest route was a detour. You're doing great!",
    "Trust your instincts! You've got this!",
    "You are the only one who can make it happen!",
    "Keep that chin up! You're in for a lucky break!",
    "Whatever happens, it's all part of your success story!"
];
let i = 0;
let currentQuote="";
function typeWriter(){
    if (i< currentQuote.length){
        quoteElement.innerHTML += currentQuote.charAt(i);
        i++;
        setTimeout(typeWriter,40)
    }
}
function displayNewQuote(){
    i=0;
    quoteElement.innerHTML="";
    const randomNum = Math.floor(Math.random()*quotes.length);
    currentQuote= quotes[randomNum];
    currentQuote = currentQuote.replace(/<[^>]*/g,'');
    typeWriter();
}
function updateSong() {
    audio.src = `${currentSongNum}.mp3`;
    audio.play().catch(error => {
        console.log("Waiting for user interaction to play audio");
    });
}
function nextSong() {
    if (currentSongNum < totalSongs) {
        currentSongNum++;
    } else {
        currentSongNum = 1;
    }
    updateSong();
}
function prevSong() {
    if (currentSongNum > 1) {
        currentSongNum--;
    } else {
        currentSongNum = totalSongs;
    }
    updateSong();
}
function reload() {
    displayNewQuote();
    if (audio.paused) {
        audio.play().catch(e => console.log("Play failed"));
    }
}

window.onload = displayNewQuote;