let clicks = 0;
const audio = document.getElementById("rickroll");
const btn = document.getElementById("prankBtn");

btn.addEventListener("click", () => {
  clicks++;

  if (clicks === 1) {
    audio.play();
    btn.textContent = "Noch mal klicken!";

  } else if (clicks === 3) {
    window.location.href = "https://mandoquest.github.io/prank.html";
  }
});
