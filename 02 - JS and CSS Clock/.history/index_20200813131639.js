const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  // get sec hand to rotate
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`


  // get min hand to rotate
  const minutes = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  // get hour hand to rotate
  const hours = now.getHours()
  const hoursDegrees = ((hours / ) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

  // debugger console.log statements
  console.log(`seconds = ${seconds}`)
  console.log(`secondsDegrees = ${secondsDegrees}`)
  console.log(`minutes = ${minutes}`)
  console.log(`minutesDegrees = ${minutesDegrees}`)
  console.log(`hours = ${hours}`)
  console.log(`hoursDegrees = ${hoursDegrees}`)
}

// have the setDate function run every second
setInterval(setDate, 1000)