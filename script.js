//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    stopSounds();
    const soundName = button.innerText.toLowerCase();

    if (soundName === 'stop') return;

    const audio = document.getElementById(soundName);
	  if (audio){
    audio.play();
	  }
  });
});

function stopSounds() {
	sounds.forEach(sound=>{
  const audios = document.getElementById(sound);
  
    audio.pause();
    audio.currentTime = 0;
  });
}