window.addEventListener('keydown', function (e) {
  console.log(e.keyCode)
  const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
  console.log(document.querySelector('audio[data-key='${e.keycod}']'))
  console.log(audio)
})