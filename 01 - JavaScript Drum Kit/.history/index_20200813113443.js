window.addEventListener('keydown', function (e) {
  const audioSelector = document.querySelector(data-key="${e.keycode}")
  console.log(audioSelector)
})