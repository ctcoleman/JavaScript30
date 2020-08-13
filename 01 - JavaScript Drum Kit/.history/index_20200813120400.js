window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
  // debugger
  if (!audio) return // stop the function from running all together
  audio.currentTime = 0; // rewind to the start for multiple button press
  audio.play()

  console.log(key)
})