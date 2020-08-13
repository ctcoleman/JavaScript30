window.addEventListener('keydown', function (e) {
  console.log(e.keycode)
  const audioSelector = document.querySelector('audio[data-key="${e.keycode}"]')
  console.log(audioSelector)
})