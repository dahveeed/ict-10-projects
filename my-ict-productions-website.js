const LittleEffortButton = document.getElementById("little-effort-button");
const littleEffort = document.querySelectorAll('.little-effort');

LittleEffortButton.addEventListener("click", function() {
  for (let i = 0; i < littleEffort.length; i++) {
    littleEffort[i].classList.toggle("toggle-little-effort");
  }
});

const IProgramAtSchool = document.querySelectorAll('')