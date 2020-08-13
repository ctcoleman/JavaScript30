const secondHand = document.querySelector('.second-hand')

function setDate() {
  // set seconds hand t
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90 
  // make the sec hand rotate
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  console.log(`seconds = ${seconds}`)
  console.log(`secondsDegrees = ${secondsDegrees}`)
}

setInterval(setDate, 1000)