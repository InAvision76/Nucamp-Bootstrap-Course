const inputEl = document.querySelector("input");
inputEl.addEventListener('onkeyup', fixLength);
// Add your event listener here

function fixLength() {
  inputEl.value = inputEl.value.slice(0,12)
}