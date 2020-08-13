const secondHand = document.querySelector('.second-hand')

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90 // turn the sec into deg for hands
  // make the sec hand rotate
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  console.log(`seconds = ${seconds}`)
  console.log(`secondsDegrees = ${secondsDegrees}`)
}

setInterval(setDate, 1000)