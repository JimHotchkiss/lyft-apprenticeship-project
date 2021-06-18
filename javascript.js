window.addEventListener("load", () => {
  buttonListener()
})

const buttonListener = () => {
  const btn = document.getElementById("submit-btn")
  btn.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    const inputValue = document.getElementById("enter-text").value
    createArray(inputValue)
  })
}

const createArray = (inputValue) => {
  const inputArray = inputValue.split(" ")
  selectThridCharacter(inputArray)
}

const selectThridCharacter = (inputArray) => {
  for (let i = 2; i < inputArray.length; i++) {}
}
