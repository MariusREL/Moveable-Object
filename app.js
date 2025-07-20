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
  let top = parseInt(window.getComputedStyle(circle).top);
  let left = parseInt(window.getComputedStyle(circle).left);
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const circlePos = circle.getBoundingClientRect();

  if (e.code === "KeyW" && top > 0) {
    top -= 10;
    circle.style.top = top + "px";
  }
  if (e.code === "KeyS" && top + circlePos.height < windowHeight) {
    top += 10;
    circle.style.top = top + "px";
  }
  if (e.code === "KeyA" && left >= 0) {
    left -= 10;
    circle.style.left = left + "px";
  }
  if ((e.code === "KeyD") & (left + circlePos.width < windowWidth)) {
    left += 10;
    circle.style.left = left + "px";
  }
});

function circleClick(x, y) {
  const circlePos = circle.getBoundingClientRect();
  let clickLeft = x - circlePos.width / 2;
  let clickTop = y - circlePos.height / 2;
  circle.style.left = clickLeft + "px";
  circle.style.top = clickTop + "px";
}

window.addEventListener("click", (e) => {
  circleClick(e.clientX, e.clientY);
});
