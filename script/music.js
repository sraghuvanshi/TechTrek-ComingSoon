var music = document.getElementById("music");
var isPlaying = false;

window.onload = function() {
  this.music.play();
};

function togglePlay() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
}
music.onplaying = function() {
  isPlaying = true;
};
music.onpause = function() {
  isPlaying = false;
};
