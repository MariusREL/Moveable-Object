const circle = document.querySelector("#circle");

// gets the size of the window and the size/position of the circle div, and centers it by dividing the space by half to find the exact center
function centerCircle() {
  circle.style.position = "absolute";
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const circlePos = circle.getBoundingClientRect();
  circle.style.top = windowHeight / 2 - circlePos.height / 2 + "px";
  circle.style.left = windowWidth / 2 - circlePos.width / 2 + "px";
}

// centers the circle on both page load and resize
window.addEventListener("DOMContentLoaded", centerCircle);
window.addEventListener("resize", centerCircle);

document.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "KeyW" && parseInt(circle.style.top) <= 800) {
    circle.style.top = parseInt(circle.style.top) - 10 + "px";
  }
  if (e.code === "KeyS") {
    circle.style.top = parseInt(circle.style.top) + 10 + "px";
  }
  if (e.code === "KeyA") {
    circle.style.left = parseInt(circle.style.left) - 10 + "px";
  }
  if (e.code === "KeyD") {
    circle.style.left = parseInt(circle.style.left) + 10 + "px";
  }
});
