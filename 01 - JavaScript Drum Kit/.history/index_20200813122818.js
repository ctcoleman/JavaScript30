
// ===== Play the audio sound ====
function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  // debugger
  if (!audio) return // stop the function from running all together
  audio.currentTime = 0.03; // rewind to the start for multiple button press
  audio.play()
  
  // === Style the box by adding class ====
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
  key.classList.add('playing')
  
})

// === Transition end event to remove the styling ===
function removeTransition(e) {
  if (e.propertyName !== 'transform') return // skip if there is no transform property
  this.classList.remove('playing')
}

window.addEventListener('keydown', playSound)
const keys = document.querySelectorAll('.key') // select all the keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition))