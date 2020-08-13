window.addEventListener('keydown', function (e) {
  console.log(e.keyCode)
  const audioSelector = document.querySelector('audio[data-key="${e.keyCode}"]')
  console.log(document.querySelector('audio[data-key="65"]'))
  console.log(audioSelector)
})