let buttonPressed;
const resetBtn = document.getElementById("resetBtn");

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  console.log(`Key pressed: ${e.code}`);

  if (e.code === " ") {
    buttonPressed = document.getElementById("space");
  } else {
    buttonPressed = document.getElementById(e.code);
  }

  if (buttonPressed) {
    buttonPressed.style.backgroundColor = "rgba(141, 48, 255, 0.6)";
    buttonPressed.style.color = "white";
  }
});

resetBtn.addEventListener("click", function () {
  const allButtons = document.querySelectorAll(".keyboardContainer button");

  allButtons.forEach((button) => {
    button.style.backgroundColor = "white";
    button.style.color = "black";
  });
});
