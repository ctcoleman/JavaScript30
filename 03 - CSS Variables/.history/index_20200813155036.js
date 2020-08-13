const inputs = document.querySelectorAll('.controls input')

function handleUpdates() {
  console.log(this.value)
}

inputs.forEach(input => input.addEventListener('change', handleUpdates))