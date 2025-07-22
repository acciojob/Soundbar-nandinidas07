//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    stopSounds();
    const soundName = button.innerText.toLowerCase();

    if (soundName === 'stop') return;

    const audio = new Audio(./sounds/${soundName}.mp3);
    audio.play();
  });
});

function stopSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}