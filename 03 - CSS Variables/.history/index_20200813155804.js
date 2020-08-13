const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(*``)
  console.log(this.name)
  console.log(suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))