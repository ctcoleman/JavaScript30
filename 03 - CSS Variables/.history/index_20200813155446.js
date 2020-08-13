const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  const suffix = this.data
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
