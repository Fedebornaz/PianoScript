const keys = document.querySelectorAll('.key');

function playNote(e) {
  if (e.type === 'keydown') {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    const pressedKey = document.querySelector(`[data-key="${e.key}"]`);
    if (pressedKey) {
      pressedKey.classList.add('pressed');
    }
  }
  if (e.type === 'click') {
    const audio = document.querySelector(
      `audio[data-note="${e.currentTarget.getAttribute('data-note')}"]`
    );
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    const pressedKey = e.currentTarget;
    if (pressedKey) {
      pressedKey.classList.add('pressed');
      setTimeout(() => {
        pressedKey.classList.remove('pressed');
      }, 100);
    }
  }
}

function removePressedClass(e) {
  const pressedKey = document.querySelector(`[data-key="${e.key}"]`);
  if (pressedKey) {
    pressedKey.classList.remove('pressed');
  }
}

window.addEventListener('keydown', playNote);
window.addEventListener('keyup', removePressedClass);
keys.forEach(key => key.addEventListener('click', playNote));
