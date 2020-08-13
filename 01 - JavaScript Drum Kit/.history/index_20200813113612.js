window.addEventListener('keydown', function (e) {
  const audioSelector = document.querySelector('audio[data-key = "${e.keycode}"]')
  console.log(audioSelector)
})