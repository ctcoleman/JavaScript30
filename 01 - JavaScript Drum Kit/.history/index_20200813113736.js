window.addEventListener('keydown', function (e) {
  console.log(e)
  const audioSelector = document.querySelector('audio[data-key="${e.keycode}"]')
  console.log(audioSelector)
})