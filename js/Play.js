function musicPlay() {
  var audio = document.getElementById('myAudio');
var musicBtn = document.getElementById('musicBtn');
  audio.volume = 0.2; // Set the volume to 20%
  if (audio.paused) {
    audio.play(); // Play the audio
    musicBtn.classList.add('rotating'); // Start rotating image
  } else {
    audio.pause(); // Pause the audio
    musicBtn.classList.remove('rotating'); // Stop rotating image
  }
}
