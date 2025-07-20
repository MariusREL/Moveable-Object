const circle = document.querySelector("#circle");

document.addEventListener("DOMContentLoaded", () => {
  circle.style.position = "absolute";
  circle.style.top = "0";
  circle.style.left = "0";
  circle.style.bottom = "0";
  circle.style.right = "0";
  circle.style.margin = "auto";
});

document.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "KeyW") {
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
