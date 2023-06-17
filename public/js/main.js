// Function to handle the click event on a button
function handleButtonClick() {
  alert("Button clicked!");
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  button.addEventListener("click", handleButtonClick);
});
