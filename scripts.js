const rex = document.getElementById("rex");
const spike = document.getElementById("spike");

function hop() {
  if (dino.classList != "hop") {
    dino.classList.add("hop");

    setTimeout(function () {
      dino.classList.remove("hop");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("click", function (event) {
  jump();
});