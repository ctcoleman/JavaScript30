
function setDate() {
  const secondHand = document.querySelector('.second-hand')

  const now = new Date()
  const seconds = now.getSeconds()  
  const secondsDegrees((seconds / 60) * 360) // turn the sec into deg for hands
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  console.log(seconds)
  console.log(secondsDegrees)
}

setInterval(setDate, 1000)