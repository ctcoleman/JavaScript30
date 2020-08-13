const secondHand = document.querySelector('.second-hand')
function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees ((seconds / 60) * 360) // turn the sec into deg for hands

  secondHand.getElementsByClassName.tr
}

setInterval(setDate, 1000)