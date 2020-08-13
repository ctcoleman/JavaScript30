const secondHand = document.querySelector('.second-hand')

function setDate() {
  // get sec hand to rotate
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`


  // get min hand to rotate
  const minutes = (seconds * 60)

  // get hour hand to rotate

  // debugger console.log statements
  console.log(`seconds = ${seconds}`)
  console.log(`secondsDegrees = ${secondsDegrees}`)
  console.log(`minutes = `)
}

// have the setDate function run every second
setInterval(setDate, 1000)