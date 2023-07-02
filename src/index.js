// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  event.target.textContent = "18 degrees";

  alert("It is 18 degrees");
});
